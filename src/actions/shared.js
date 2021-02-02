import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'


//tylermcginnis - hardcoded the AuthedID, setting the AuthorId as a property on redux store
const AUTHED_ID = 'tylermcginnis'
//Asynchronous request
export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    //return a promise that will pass users, tweets 
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
} 