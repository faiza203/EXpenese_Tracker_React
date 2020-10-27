export default (state , action) => {
  switch(action.type){
    case  "DELETE_TRANSACTION":
      return {...state,
      transactions : state.transactions.filter((transaction) => {
        return transaction.id !== action.payload })
    }
    case  "ADD_TRANSACTION":
    return {...state,
    transaction : state.transactions.filter((transaction) => {
      return transaction.id !== action.payload })
  }
      default :
      return state;
  }
}