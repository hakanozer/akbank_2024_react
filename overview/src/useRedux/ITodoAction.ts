import { ITodo } from "../models/ITodo";
import { TodoType } from "./TodoType";

export interface ITodoAction {
    type: TodoType,
    payload: ITodo
}