export default function productReducer(state, action) {
  switch (action.type) {
    case "DELETE_PRODUCT":
      let filteredArr = state.filter((product) =>
        product.id === action.id ? false : true
      );
      return filteredArr;
    case "EDIT_PRODUCT":
        //modify the one object matching the id with the new object action.data
        let productCopy = state.map(product => product.id === action.data.id ? action.data : product)
        return productCopy
    default:
      return state;
  }
}
