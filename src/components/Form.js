import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addList, updateList } from '../actions/listing';

const Form = (props) => {

  const [state, setState] = useState({ amount: "", date: "", description: "", type: props.type });
  const dispatch = useDispatch();
  const addListing = (state) => dispatch(addList(state));
  const updateListing = (state) => dispatch(updateList(state.id, state));
  const current_list = useSelector((state) => state.listing.current_list);

  useEffect(() => {

    if (current_list && (props.formType === 'Edit')) {
      setState(prevState => ({
        ...prevState,
        amount: current_list.amount,
        date: current_list.date,
        description: current_list.description, type: current_list.type, id: current_list.id
      }));
    }
  }, [current_list])

  const onChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (state.id) {
      updateListing(state);
    } else {
      addListing(state);
    }

    setState('');
    props.HideForm();
  };
  const ClearForm = () => {

    setState({});
    props.HideForm();
  }
  return (
    <>
      <div className="col-12 p-4">
        <form onSubmit={onSubmit}>

          <div className="row">
            <div className="form-group col-3">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                className="form-control"
                id="amount"
                name="amount"
                onChange={onChange}
                value={state.amount}
                required
              /></div>


            <div className="form-group col-4">
              <label htmlFor="inputAddress">Date</label>
              <input
                // selected={this.state.startDate}
                onChange={onChange}
                name="date"
                className="form-control"
                value={state.date}
                type="date"
                required
              />
            </div>
            <div className="form-group col-5">
              <label htmlFor="inputAddress2">Description</label>
              <textarea
                type="text"
                className="form-control"
                name="description"
                onChange={onChange}
                value={state.description}
                required
              />
            </div></div>
          <div className="row">
            <div className="m-auto">
              <button type="submit" className="btn btn-primary mr-2">
                Save
              </button>
              <button
                className="btn btn-primary"
                onClick={ClearForm}
              >
                Cancel
              </button></div></div>
        </form></div>
    </>
  );
}

export default Form;
