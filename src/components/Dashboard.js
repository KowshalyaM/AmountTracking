import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import Items from './Items';
import Form from './Form';
import { editList, deleteList, getIncomeAmount, getExpenseAmount, getFinalAmount } from "../actions/listing";
import Summary from './Summary';


const Dashboard = () => {
  const [addIncome, setaddIncome] = useState(false);
  const [addExpense, setExpenseIncome] = useState(false);
  const [showbtn, setshowbtn] = useState(true);
  const [formType, setformType] = useState();

  const lists = useSelector((state) => state.listing.wallet_lists);
  // localStorage.removeItem("new");
  const { income_amount, expense_amount, final_amount } = useSelector(state => ({
    income_amount: state.listing.income_amount,
    expense_amount: state.listing.expense_amount,
    final_amount: state.listing.final_amount,
  }), shallowEqual);


  const dispatch = useDispatch();
  const EditItem = (id) => dispatch(editList(id));
  const deleteItem= (id) => dispatch(deleteList(id));

  useEffect(() => {
    dispatch(getIncomeAmount());
    dispatch(getExpenseAmount());
    dispatch(getFinalAmount());
  })


  const showIncomeForm = (type) => {
    setaddIncome(true);
    setshowbtn(false);
    setformType(type);
  }
  const showExpenseForm = (type) => {
    setExpenseIncome(true);
    setshowbtn(false);
    setformType(type);
  }
  const HideForm = () => {
    setshowbtn(true);
    setExpenseIncome(false);
    setaddIncome(false);
    setformType('');
  }
  const EditRow = id => {
    EditItem(id);
  };



  return (
    <div className="row">
      <div className="col-md-9 m-auto">
        <div className="card">
          
          <Summary final_amount={final_amount} expense_amount={expense_amount} income_amount={income_amount} />

          <div className="gaadiex-list">
            {lists && lists.map((list) => (
              <Items list={list} key={list.id} EditRow={EditRow} deleteItem={deleteItem} HideForm={HideForm} showIncomeForm={showIncomeForm} showExpenseForm={showExpenseForm} />
            ))}

            {addIncome && <Form type="Income" formType={formType} HideForm={HideForm} />}
            {addExpense && <Form type="Expense" formType={formType} HideForm={HideForm} />}
          </div>
          {showbtn &&
            <div className="card-body">
              <div className="text-center">
                <button className="btn btn-success mr-4" onClick={showIncomeForm.bind("new")}>Add Income</button>
                <button className="btn btn-danger ml-4" onClick={showExpenseForm.bind("new")}>Add Spending</button>
              </div>
            </div>}




        </div>
      </div>
    </div>
  );
}

export default Dashboard;
