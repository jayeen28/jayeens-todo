import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodoHead from './TodoHead/TodoHead';
import TodoLists from './TodoLists/TodoLists';
interface todo{
    _id:string,
    todoName:string,
    todoDate:string
}
const Todos = () => {
    const [todos,setTodos]=useState<todo[]>([]);
    useEffect(()=>{
        const todosFLocal:string|null=localStorage.getItem('jayeens-todos')||null;
        if(todosFLocal){
            const parsedTodo:todo[]=JSON.parse(todosFLocal);
            setTodos(parsedTodo)
        }
    },[])
    return (
        <>
        <TodoHead />
        <div className='todosBody'>
            <AddTodo todos={todos} setTodos={setTodos}/>
            <div className="JTodosWrapper">
            <div className="JTodosHead">
                <Typography variant='h6'>Todo list</Typography>
            </div>
            {
                todos.length?<TodoLists todos={todos} setTodos={setTodos}/>
                :
                <span>No toods found.</span>
            }
            </div>
        </div>
        </>
    );
};

export default Todos;