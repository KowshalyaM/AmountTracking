import {
    GET_LISTING,
    ADD_LIST,
    EDIT_LIST,
    UPDATE_LIST,DELETE_LIST,
    GET_INCOME_AMOUNT,
    GET_EXPENSE_AMOUNT,
    GET_FINAL_AMOUNT
  } from "./types";
  
  export const getListing = () => dispatch => {
    dispatch({
      type: GET_LISTING
    });
  };
  
  export const addList = data => dispatch => {
    // console.log(data);
    dispatch({
      type: ADD_LIST,
      payload: data
    });
  };
  
  export const editList = id => dispatch => {
    dispatch({
      type: EDIT_LIST,
      payload: id
    });
  };
  export const updateList = (id, list) => dispatch => {
    dispatch({
      type: UPDATE_LIST,
      payload: list,
      id: id
    });
  };

  export const deleteList = id => dispatch => {
    
    dispatch({
      type: DELETE_LIST,
      payload: id
    });
  };

  export const getIncomeAmount = () => dispatch => {
    dispatch({
      type: GET_INCOME_AMOUNT
    });
  };
  
  export const getExpenseAmount = () => dispatch => {
    dispatch({
      type: GET_EXPENSE_AMOUNT
    });
  };
  export const getFinalAmount = () => dispatch => {
    dispatch({
      type: GET_FINAL_AMOUNT
    });
  };
  