import {SET_AUTHED_USERS} from "../actions/authedUser";
//And, the authedUser slice of the state in the store has been initialized to null.
// state will initially be null, first time the function invoked  with the state of undefined
export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USERS:
      return   action.id 
    default:
      return state;
  }
}