import {
    GET_LISTING,
    ADD_LIST,
    EDIT_LIST,
    UPDATE_LIST,DELETE_LIST,
    GET_INCOME_AMOUNT,
    GET_EXPENSE_AMOUNT,
    GET_FINAL_AMOUNT
  } from "../actions/types.js";
  
  const wallet_list = {
    wallet_lists: [
      {
        id: 1,
        type: "Income",
        date: "2020-12-22",
        amount: "100",
        description: "Income of sample"
      },
      {
        id: 2,
        type: "Expense",
        date: "2020-01-03",
        amount: "50",
        description: "test expense"
      }
    ]
  };
  
  const initialState = {
    wallet_lists: localStorage.getItem("new")
      ? JSON.parse(localStorage.getItem("new"))
      : wallet_list.wallet_lists
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_LISTING:
        // localStorage.removeItem("new");
        return state;
  
      case ADD_LIST:
        let last_item = state.wallet_lists.length - 1;
        let wallet_id = (state.wallet_lists.length)?state.wallet_lists[last_item].id:1;
        // let wallet_len = state.wallet_lists.length;
        const payload = { ...action.payload, id:  wallet_id + 1 };
        const lists = [...state.wallet_lists, payload];
        const new_arr = state.wallet_lists.concat([payload]);
        localStorage.setItem("new", JSON.stringify(new_arr));
  
        return {
          ...state,
          wallet_lists: lists
        };
      case EDIT_LIST:

       
          let edit_row = state.wallet_lists.filter(
            list => list.id === action.payload
          );
        
          return {
            ...state,
            current_list: edit_row[0]
          };
      case UPDATE_LIST:
            const list = state.wallet_lists.map(el =>
              el.id === action.id ? Object.assign({}, el, action.payload) : el
            );
            localStorage.setItem("new", JSON.stringify(list));
            return {
              ...state,
              wallet_lists: list
            };
        case DELETE_LIST:
          const deleted_list = state.wallet_lists.filter((list) => list.id !== action.payload)
          localStorage.setItem("new", JSON.stringify(deleted_list));
          return {
            ...state,
            wallet_lists: deleted_list
          };
        case GET_INCOME_AMOUNT:
            var income_amount = state.wallet_lists.reduce(function(sum, record) {
              if (record.type === "Income") return sum + +record.amount;
              else return sum;
            }, 0);
            return { ...state, income_amount: income_amount };
      
      case GET_EXPENSE_AMOUNT:
            var expense_amount = state.wallet_lists.reduce(function(sum, record) {
              if (record.type === "Expense") return sum + +record.amount;
              else return sum;
            }, 0);
            return { ...state, expense_amount: expense_amount };
      
      case GET_FINAL_AMOUNT:
            var final_amount = state.wallet_lists.reduce(function(sum, record) {
              if (record.type === "Income") return sum + +record.amount;
              else if (record.type === "Expense") return sum - record.amount;
              else return sum;
            }, 0);
            return { ...state, final_amount: final_amount };
     
      default:
        return state;
    }
  }
  