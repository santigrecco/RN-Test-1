import axios from 'axios'
const backend = 'http://192.168.0.4:3030'


export function fetchPoints(position) {
  const request = axios.get(`${backend}/get-data`)
  return (dispatch) => {
    request.then(response =>{
      dispatch({type: 'FETCH_POINTS', payload:response.data})
    })
  }
}
