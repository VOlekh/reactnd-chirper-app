import React, { Component } from 'react'

class NewTweet extends Component {
  state = {
      //set state as empty string
    text: '',
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

    // todo: Add Tweet to Store

    console.log('New Tweet: ', text)
    // reset to empty string
    this.setState(() => ({
      text: ''
    }))
  }


  render() {
    const { text } = this.state

    {/* todo: Redirect to home - / if submitted */}

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
export default NewTweet 