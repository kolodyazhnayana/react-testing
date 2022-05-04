import {Action, applyMiddleware} from "redux"
import thunk, {ThunkAction} from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createWrapper } from "next-redux-wrapper"
import reducer from "./reducers/reducer"
import { legacy_createStore as createStore} from 'redux'

// middleware
const middleware = [thunk]

// creating store
export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

// assigning store to next wrapper
const makeStore = () => store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
    >

export const wrapper = createWrapper(makeStore)
