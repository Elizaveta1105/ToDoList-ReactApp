import React, { useRef } from 'react'
import './NewTodo.css'

type NewTodoProps = {
    onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null)

    const clearInput = () => {
        const el = document.getElementById('todo-text') as HTMLInputElement
        el.value = ''
    };
    
    const todoSubmitHandler= (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText)
        clearInput()
    }

    return <form onSubmit={todoSubmitHandler}>
        <div className='form-control'>
            <label htmlFor="todo-text">Todo List</label>
            <input 
                type="text" 
                id="todo-text" 
                ref={textInputRef}  
                placeholder="Add a task..."
            />
        </div>
        <button onSubmit={todoSubmitHandler} type="submit">Add</button>
    </form>
}

export default NewTodo