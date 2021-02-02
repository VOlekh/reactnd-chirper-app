import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet.js'

class Dashboard extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {this.props.tweetIds.map((id) => (
            <li key={id}>
              {/* <div>TWEET ID: {id}</div> */}
              {/* render Tweet passing an id*/}
              <Tweet id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
// take a state of our store { tweets }

function mapStateToProps ({ tweets }) {
  return {
    tweetIds: Object.keys(tweets)
    // tweets are sorted by time
      .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard) 