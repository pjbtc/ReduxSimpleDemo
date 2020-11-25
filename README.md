# ReduxSimpleDemo
It is simple Redux Example. It is just basic redux project. This project helps to get familiarize with the basic terminologies used in redux projects.
Fundamental concepts are explained in this project. 
State describes the condition of the app at a specific point in time
The UI is rendered based on that state
When something happens (such as a user clicking a button), the state is updated based on what occurred
The UI re-renders based on the new state.
Action  : An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.
Reducer: A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.
Store: The current Redux application state lives in an object called the store .
The store is created by passing in a reducer, and has a method called getState that returns the current state value.
Dispatch: The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value.
You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.
Selector: Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data.
