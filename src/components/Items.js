import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
const Border = styled.div`
border-bottom: 2px solid #000;
`;
const Amount = styled.h4`
color: ${props => (props.type === 'Income') ? "green" : "red"};

`;

const Items = (props) => {


  const handleEdit = () => {
    props.HideForm();

    props.EditRow(props.list.id)
    if (props.list.type === 'Income') {
      props.showIncomeForm("Edit");
    } else if (props.list.type === 'Expense') {
      props.showExpenseForm("Edit");
    }


  }


  return (

    <div className="gaadiex-list-item p-2" key={props.list.id}>
      <Border>
        <div className="col-12">
          <div className="row">
            <div className="col-3">
              <div>{props.list.date}</div>
              <Amount type={props.list.type}>$ {props.list.amount}</Amount>
              {/* <h4 className={(props.list.type === 'Income')?"amount-income":"amount-expense"}>$ {props.list.amount}</h4> */}
            </div>
            <div className="col-6">
              {props.list.description}
            </div>
            <div className="col-3">
              <div className="row">
                <div className="pr-4"> <FontAwesomeIcon
                  className="from mt-3" title="Edit"
                  icon={faPencilAlt} onClick={handleEdit}
                />  </div>
                <div><FontAwesomeIcon
                  className="from mt-3" title="Delete"
                  icon={faTrash} onClick={props.deleteItem.bind(null, props.list.id)}
                />  </div>
              </div></div>
          </div></div></Border></div>


  );
}

export default Items;
