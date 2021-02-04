import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      //Code below wraped with  a router
      // <div>
      //    <LoadingBar />
      //   {/* Starter Code */}
      //   {/* <Dashboard/> */}
      //   {/* render Dashboard only once the data from handleInitialData invocation is finished */}
      //   {this.props.loading === true
      //     ? null
      //     // : <Dashboard />}
      //     // : <NewTweet />}
      //     //match.params.id part of url
      //     : <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}}/>}
      // </div>
      <Router>
      <Fragment>
        {/*right after router tag we have to pass only one tag (single child), but we are passing LoadingBar and div, for this use Fragment */}
        <LoadingBar />
        <div className='container'>
          <Nav />
          {this.props.loading === true
            ? null
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' component={NewTweet} />
              </div>}
        </div>
      </Fragment>
    </Router>
    )
  }
}
// grab data from store
function mapStateToProps ({ authedUser }) {

  return {
    //if the user data is null, then in render render null -> ? null (see above)
    loading: authedUser === null
  }
}

// export default App
// in order to get acces to dispatch, state is empty ()
//Using the connect() function upgrades a component to a container. Containers can read state from the store and dispatch actions.
// export default connect()(App) 

export default connect(mapStateToProps)(App)