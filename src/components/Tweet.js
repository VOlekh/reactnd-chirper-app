import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'
import { TiArrowBackOutline } from 'react-icons/ti'
import { TiHeartOutline } from 'react-icons/ti'
import { TiHeartFullOutline } from 'react-icons/ti'
import { handleToggleTweet } from '../actions/tweets'
import { Link, withRouter } from 'react-router-dom'

class Tweet extends Component {
  handleLike = (e) => {
    e.preventDefault()

    // todo: Handle Like Tweet
    const { dispatch, tweet, authedUser } = this.props

    dispatch(handleToggleTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authedUser
      }))
  }
  toParent = (e, id) => {
    e.preventDefault()
    //  Redirect to parent Tweet.
    this.props.history.push(`/tweet/${id}`)
  }
 

  render() {
    const { tweet } = this.props

    if (tweet === null) {
      return <p>This Tweet doesn't existd</p>
    }

    console.log(this.props)


    //UI const, tweet comming from props
    const {
      name, avatar, timestamp, text, hasLiked, likes, replies, id, parent
    } = tweet

    return (
// wat we want to render
        
    //   Change <div className='tweet'> to Link
    <Link to={`/tweet/${id}`} className='tweet'>
          {/* avatar */}
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />

        {/* graycolored text, time, date, replying to */}
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>

            {parent && (
              <button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>



          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
             {/* if no replys do not show number */}
            <span>{replies !== 0 && replies}</span>
            {/* likes */}
            <button className='heart-button' onClick={this.handleLike}>
                {/* if likes is true than color with red and add outline */} 
              {hasLiked === true
                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                : <TiHeartOutline className='tweet-icon'/>}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>


        </div>
    </Link>
    )
  }
}
// what state component need from store
function mapStateToProps ({authedUser, users, tweets}, { id }) {
  const tweet = tweets[id]
  //Parent tweet has parameter replyingTo: "czpa59mg577x1oo45cup0d" const parentTweet = tweets[tweet.replyingTo]
  // if tweet has no parant there will be an error, so use if statement
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null

  return {
      //path user and tweets itself in this.props
    authedUser,
    // use if statement
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
    }
  }
  
//   export default connect(mapStateToProps)(Tweet) 
export default withRouter(connect(mapStateToProps)(Tweet)) 
