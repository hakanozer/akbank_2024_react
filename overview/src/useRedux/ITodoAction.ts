import { UnknownAction } from "redux";
import { ITodo } from "../models/ITodo";
import { TodoType } from "./TodoType";

export interface ITodoAction extends UnknownAction {
    type: TodoType,
    payload: ITodo
}