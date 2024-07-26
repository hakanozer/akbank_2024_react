import { stat } from "fs";
import { ITodo } from "../models/ITodo";
import { ITodoAction } from "./ITodoAction";
import { TodoType } from "./TodoType";

export const TodoReducer = (state: ITodo[] = [], action: ITodoAction ) => {

    switch (action.type) {
        case TodoType.TODO_ADD:
            return [...state, action.payload]
        case TodoType.TODO_REMOVE:
            {
                const newArr = [...state]
                const index = newArr.findIndex(item => item.id === action.payload.id )
                newArr.splice(index, 1)
                return newArr
            }   
        default:
            return state
    }

}