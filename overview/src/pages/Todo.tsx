import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITodo } from '../models/ITodo'
import { ITodoAction } from '../useRedux/ITodoAction'
import { TodoType } from '../useRedux/TodoType'
import { StateType } from '../useRedux/store'

function Todo() {

  // Use Redux
  const dispatch = useDispatch()
  const todos = useSelector((item: StateType) => item.TodoReducer)
  
  const [todo, setTodo] = useState('')  
  const addTodo = (evt: FormEvent) => {
    evt.preventDefault()
    
    const item:ITodo = {
        id: 0,
        todo: todo,
        completed: true,
        userId: 0
    }
    const sendObj: ITodoAction = {
        type: TodoType.TODO_ADD,
        payload: item
    }
    dispatch(sendObj)

  }  
  return (
    <>
        <h2>Todo</h2>
        <form onSubmit={addTodo} className='col-sm-4'>
            <div className='mb-3'>
                <input required onChange={(evt) => setTodo(evt.target.value)} className='form-control' placeholder='Todo' />
            </div>
        </form>

        <div className='row'>
            {todos.map((item, index) => 
                <div key={index} className='col-sm-3 mb-3'>
                    <div className="card">
                        <div className="card-body">
                            {item.todo}
                        </div>
                    </div>
                </div>
            )}
        </div>

    </>
  )
}

export default Todo