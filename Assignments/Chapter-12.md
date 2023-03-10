# Chapter-12

### redux vs useContext

**useContext:**
useContext is a hook that provides a way to pass data through the component tree without manually passing props down through each nested component. 
It is used to share data.
Context value is used to make changes.
The state is changed directly.
Preferred for small applications.

**redux:**
Redux is a state managing library used in JavaScript apps. It is very popular for React and React-Native. It simply manages the state and data of your application.
It is used to manage data and state.
Pure functions are used to make changes.
The state is read-only and cannot be changed directly. An action is dispatched to make any changes in state.
Preferred for large applications.
Building Parts of redux:
1. Action
2. Reducer
3. Store

### Advantage of using Redux Toolkit over Redux
Redux is a JavaScript library for managing application state. It is most commonly used with React, but can be used with other JavaScript frameworks as well. 

Redux Toolkit is a set of tools that helps simplify Redux development. It includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers.

### Explain Dispatcher
In react-redux the useDispatch hook gives us access to our store's dispatch method. Dispatch is used to send actions into our redux store and is the only way we can affect the store from within a component

### Explain Reducer
A typical reducer function needs to:

- Look at the type field of the action object to see how it should respond
- Update its state immutably, by making copies of the parts of the state that need to change and only modifying those copies

It is a pure function responsible to make any changes in the state of the store when an action is dispatched.

### Explain Slice
A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

### Explain Selector
Allows you to extract data from the Redux store state, using a selector function.
The selector is approximately equivalent to the mapStateToProps argument to connect conceptually. The selector will be called with the entire Redux store state as its only argument. The selector will be run whenever the function component renders (unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector). useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.

### Explain createSlice and the configuration it takes.
Redux Toolkit has a function called createSlice, which takes care of the work of generating action type strings, action creator functions, and action objects.
In this there are few parameters that need to be passed.

- The first one is "name", it is to define the slice's purpose or what it is going to be sued for.
- Provide initial state for the functionality.
- Write an object that has some reducer functions in it, and it generates the corresponding action code automatically. 
```
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items:[],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
```
