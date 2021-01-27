//The variable logger is assigned to a function that takes the store as its argument. That function returns another function, which is passed next (which is the next middleware in line or the dispatch function). That other function return another function which is passed an action. Once inside that third function, we have access to store, next, and action.
const logger = (store) => (next) => (action) => {
    //show every time the new action is dispatched
    // what the next state is going to be after it is dispatched
    console.group(action.type)
      console.log('The action: ', action)
      //
      const returnValue = next(action)
      console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue
  }
  
  export default logger 
