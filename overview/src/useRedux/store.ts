import { combineReducers, legacy_createStore } from "redux";
import { TodoReducer } from "./TodoReducer";

const combine = combineReducers({
    TodoReducer,
})

export type StateType = ReturnType<typeof combine>

export const store = legacy_createStore(combine)