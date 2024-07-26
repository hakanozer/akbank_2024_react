import React, { FormEvent, useState } from 'react'

function Todo() {
  
  const [todo, setTodo] = useState('')  
  const addTodo = (evt: FormEvent) => {
    evt.preventDefault()
    console.log(todo)
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
            <div className='col-sm-3'>
                <div className="card">
                    <div className="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Todo