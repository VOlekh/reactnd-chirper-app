import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

//The tweets slice of the state in the store has been initialized to an empty object.
export default function tweets(state = {}, action) {
  switch (action.type) {
    
    
    
    case RECEIVE_TWEETS:
      return {
          // new state which is at the beginning an empty state {} plus action.users
        ...state,
        ...action.tweets,
      };

// If user like tweet add user to array
      //If the tweet is liked then the user is removed from the likes array.because we have to do the opposite on the click. I.e if true then make it false by removing from the list. Similarly, if it is False then add it to the list to make it true.
      case TOGGLE_TWEET :
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            //allready liked it
            likes: action.hasLiked === true
            //filter users that allready liked a tweet
            ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
            //addthe username of authedUser to the likes array
            : state[action.id].likes.concat([action.authedUser])
        
        }
      }
      // wen ADD_TWEET is dispatched
      case ADD_TWEET :
        const { tweet } = action
  
        let replyingTo = {}
        if (tweet.replyingTo !== null) {
            // then replyingTo is going to be an object that has a key of whatever the tweet we are replying to
          replyingTo = {
            [tweet.replyingTo]: {
                //ans tthe object for this tweet is what was before
              ...state[tweet.replyingTo],
              //what we want to modify 
              replies: state[tweet.replyingTo].replies.concat([tweet.id])
            }
        }
      }

      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo,
    }

    default:
      return state;
  }
}