import data from '../data';
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      let addArr = state.expenses;
      let newObj = action.payload;
      return {
        expenses: addArr.concat(newObj)
      };
    case 'DELETE_EXPENSE':
      let delArr = state.expenses;
      let id = action.payload;
      return {
        expenses: delArr.filter(expense=> expense.id!==id)
      };
    case 'EDIT_EXPENSE':
      return {
        expenses: action.payload
      };
    case 'FILTER_EXPENSES':
      return {
        expenses: action.payload
    };
    case 'CLEAR_FILTER':
      return{
        expenses: data
      }
    case 'SEARCH_EXPENSES':
      let query = action.payload;
      let newArr = state.expenses.filter((expense)=>{
         return expense.name.toLowerCase().includes(query);
      })
      return {
        expenses: newArr
    };
    case 'CLEAR_SEARCH':
      return{
        expenses: data
      }
    default:
      return state;
  }
};

export default reducer;
