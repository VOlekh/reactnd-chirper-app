// import { saveLikeToggle } from '../utils/api'
import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

//events
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

//action creator
function addTweet (tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  }
}



export function handleAddTweet (text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

return saveTweet({
  text,
  author: authedUser,
  replyingTo
})
//once above resolves,we are taking a tweet  dispatch our ad tweet action creator passing it the tweet
  .then((tweet) => dispatch(addTweet(tweet)))
  .then(() => dispatch(hideLoading()))
}
}


// action creator
export function receiveTweets (tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
} 


function toggleTweet ({ id, authedUser, hasLiked }) {
    return {
      type: TOGGLE_TWEET,
      id,
      authedUser,
      hasLiked
    }
  }
  
  export function handleToggleTweet (info) {
    return (dispatch) => {
      dispatch(toggleTweet(info))
  
      return saveLikeToggle(info)
        .catch((e) => {
          console.warn('Error in handleToggleTweet: ', e)
          // reset it back what it was
          dispatch(toggleTweet(info))
          alert('The was an error liking the tweet. Try again.')
        })
    }
  } 