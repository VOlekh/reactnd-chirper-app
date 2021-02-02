import { saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
//event
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

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