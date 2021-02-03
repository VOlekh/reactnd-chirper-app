# Chirper Project

This repo is a code-along with the first project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

Most of the commits in this repository correspond to videos in the program.

## Project Setup

* clone the Project - `git@github.com:udacity/reactnd-chirper-app.git`
* install the dependencies - `npm install`
* npm update. stop the server and run following - `npm add react-redux' 'npm update react react-dom`,  `npm add redux`
* run server
* `add redux-thunk`
* If you get the error TypeError: Cannot call a class as a function, check you haven't imported thunk from react-thunk rather than redux-thunk.


## Contributing

Because this is a code-along project and the commits correspond to specific videos in the program, we will not be accepting pull requests.

If you feel like there's a major problem, please open an issue to discuss the problem and potential resolution.

## License

MIT

Adding a New Tweet
Let’s now work on the logic of adding a new tweet. Once the user submits a new tweet, it should show up in the list of all of tweets and be added to our database. Since this tweet will be used by more than one component, we know that we want to make sure the store is modified to reflect the updated list of tweets. Recording tweets in a database is an asynchronous operation, so we can use Redux Thunk to issue the API request.


With push() you are adding an element to the current array, therefore mutating it.

On the other hand with concat() (or the spread operator) you are not mutating the original arrays, but creating a new one. And this is key, because you need your reducers to be pure functions and mutations break that rule.

New Tweet Reducer. 
How will we be modifying the state to reflect the new tweet?

This is going to be a two-part process:

the new tweet needs to be added to the list of tweets
an already existing tweet needs to be modified if the new tweet is a response to another tweet
In this reducer, we'll 1) concatenate the new tweet to the list of the already-existing tweets. Remember that the object spread operator offers us the most concise way of doing that; and 2) modify the replies property of the tweet the new tweet is replying to.

New Tweet Component.
will show up inside of the App Component when the user goes to the /new page and that it will be inside of the Tweet Page Component when the user is on the /tweet/:id page.

When the user is at the /new route, the new tweet will not be attached to another tweet. When the user is at the tweet/:id route, the new tweet will be attached to the already-displayed tweet. Notice that the route already contains the parent tweet’s id. We can just pass the id from the route to the New Tweet Component whenever we’re creating a reply tweet.

What happens when someone clicks “Submit” to add a new tweet? The New Tweet Component will need to communicate with our store. We communicate with the store by dispatching actions. dispatch is a method on the store. That means that the New Tweet Component needs to be connect()ed to Redux. Once a component is connected to the store, it will have dispatch on its props.