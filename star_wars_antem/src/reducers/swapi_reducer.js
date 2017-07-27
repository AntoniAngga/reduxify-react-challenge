const intialState = {
  data_detail : {
    results: ['']
  }
}

const swapi_reducer = (state=intialState, action) => {
  switch (action.type) {
    case "LIST_SWAPI":
        return {...state, data_detail: action.payload.list_api}
    default:
      return state
  }
}

export default swapi_reducer