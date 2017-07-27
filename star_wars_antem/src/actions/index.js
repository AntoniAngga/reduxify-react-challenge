import axios from 'axios';


export const fetchListSWAPI = (newSwapi) => {
  return {
    type: 'LIST_SWAPI',
    payload: {
      list_api: newSwapi
    }
  }
}

export const get_list = () => {
  return (dispatch, getState) => {
    const apiUrl = 'https://swapi.co/api/people'
    axios.get(apiUrl)
      .then( (resp) => {
        dispatch(fetchListSWAPI(resp.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}