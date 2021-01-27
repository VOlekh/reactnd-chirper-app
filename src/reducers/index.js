import {combineReducers} from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from './tweets'

//combine all of these reducers into one main, root reducer, the createStore function only accepts a single reducer
export default combineReducers ({
    authedUser: authedUser,
    tweets: tweets,
    users: users
})
