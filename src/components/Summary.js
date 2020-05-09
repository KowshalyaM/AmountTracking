import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
const Income = styled.div`
      color: green;
      `;
const Expense = styled.div`
      color: red;
      `;
const Summary = (props) => {



    return (

        <div className="card-header">
            <div>Balance</div>
            <h4>$ {props.final_amount}</h4>
            <div className="row">
                <div className="col-lg-3 col-5"><Income>Income : $ {props.income_amount}  </Income></div>
                <div className="col-lg-4 col-5 amount-expense"><Expense>Spendings : $ {props.expense_amount} </Expense></div></div>
        </div>


    );
}

export default Summary;
