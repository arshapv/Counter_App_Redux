# React + Vite

 Redux
   .....
   Redux is a state management library for javascript applications. It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

   When should i use Redux
   ....................... 

   Redux is more useful when:

      *you have amounts of application state that are needed in many places in the app
      *The app state is updated frequently over  time
      *the logic to update that state may be complex
      *The app has a medium or large sized codebase, and might be worked on by many people

   Principles of Redux
   ...................
   1, Single souce of truth: the global state of your application is stored in an object tree within a single store.
   2, State is read only: The only way to change the state is to emit an action an object describing what happened
         Action- it is a javascript object carrying information about the type of change to the state and any payload data required to make such change.
   3, Change are made with pure functions: to specify how the tree is transformed by actions, you write pure reducers.
         Reducer function takes actions and current state as arguments and returns an updated copy of state

         Store- the state of your redux application lives in an object called store.
                using confugreStore() to create redux store. 'provider component from react-redux to make the store available to the store available to the react app

         Actions- actions is a javascript object carrying information about the type of change to the state and any payload data required to make such change.

         Dispatch-It is a function is called when a state updated is required. the function is  passed an action object, and when action is dispatched the store will run its reducer function.

         Reducer-A reducer is a pure function that receives the current state and an actions object, decides how to updated the state if necessary. and returns objct, decides how to updated the state if necessary. and returns the new state.
         

   To use redux Install
   ...................
   1, npm install @reduxjs/toolkit
   2, npm install react-redux


useDispatch- function ne dispatch cheyyan vendi import cheyyunnu


