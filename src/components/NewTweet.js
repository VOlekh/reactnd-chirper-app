import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
  state = {
      //set state as empty string
    text: '',
    toHome: false,
  }


  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text
    }))
  }


  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state
    const { dispatch, id } = this.props

    // Add Tweet to Store
    console.log('New Tweet: ', text)
    dispatch(handleAddTweet(text, id))
    // reset to empty string
    this.setState(() => ({
        //instead of resetting a text to an empty string
      text: '',
      // if reply to tweet we want to stay on a page, if we compose new tweet we go home
      // if id is a thing, then toHome is false, if not - true
      toHome: id ? false : true,
    }))
  }


  render() {
    const { text, toHome } = this.state

    {/* Redirect to home - / if submitted */}
    // logic on new tweet or retweet, return on home page if new tweet, stay  if retweet
    if (toHome === true) {
        return <Redirect to='/' />
      }

    const tweetLeft = 280 - text.length

    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        {/* //invoked handle submit method */}
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            // when input fild changes
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {/* when the tweet is more then 100 show how much is left */}
          {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}

          <button
            className='btn'
            type='submit'
            // disabled if the text is equal to empty string
            disabled={text === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}
// export default NewTweet 
export default connect()(NewTweet) 