import { RECEIVE_USERS } from "../actions/users";
//The users slice of the state in the store has been initialized to an empty object.
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
          // new state which is at the beginning an empty state {} plus action.users
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}