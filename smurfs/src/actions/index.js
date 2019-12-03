import axios from 'axios'

export const SMURF_LOAD_START = 'SMURF_LOAD_START'
export const SMURF_LOAD_SUCCESS = 'SMURF_LOAD_SUCCESS'
export const SMURF_LOAD_FAILURE = 'SMURF_LOAD_FAILURE'
export const SMURF_POST_START = 'SMURF_POST_START'
export const SMURF_POST_SUCCESS = 'SMURF_POST_SUCCESS'
export const SMURF_POST_FAILURE = 'SMURF_POST_FAILURE'

export const getSmurfData = () => dispatch => {

    dispatch({type: SMURF_LOAD_START})

    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({type: SMURF_LOAD_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: SMURF_LOAD_FAILURE, payload: err})
        })
}

export const postSmurfData = smurf => dispatch => {

    dispatch({type: SMURF_POST_START})
    axios.post('http://localhost:3333/smurfs', {
        name: smurf.name,
        age: parseInt(smurf.age),
        height: smurf.height + 'cm'
    })
        .then(res => {
            console.log(res)
            dispatch({type: SMURF_POST_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: SMURF_POST_FAILURE, payload: err})
        })
}