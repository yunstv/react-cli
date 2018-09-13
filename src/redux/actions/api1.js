import { createAction } from 'redux-actions'

const fetchApi1 = payload => async (dispatch, getState) => {
  const res = await setTimeout(() => {
    // httpR  
    return {}
  }, 1000)
  dispatch(createAction('FETCHAPI1')(res))
}

export default {
  fetchApi1,
}