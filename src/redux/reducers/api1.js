import { handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  fetchApi: [],
})
export default handleActions({

  FETCHAPI1 (state, action) {
    const fetchApi = action.payload
    return Immutable.merge(state, {
      fetchApi,
    })
  }

}, initialState)