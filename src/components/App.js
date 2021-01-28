import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        {/* Starter Code */}
        {/* <Dashboard/> */}
        {/* render Dashboard only once the data from handleInitialData invocation is finished */}
        {this.props.loading === true
          ? null
          : <Dashboard />}
      </div>
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