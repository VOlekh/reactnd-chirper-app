import { RECEIVE_TWEETS} from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
          // new state which is at the beginning an empty state {} plus action.users
        ...state,
        ...action.tweets,
      };
    default:
      return state;
  }
}