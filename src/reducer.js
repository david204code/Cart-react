// reducer function, looking for two things (state, action)
const reducer = (state, action) => {

  if(action.type === 'CLEAR_CART'){
    return {...state, cart: []}
  }
  return state
};

export default reducer;