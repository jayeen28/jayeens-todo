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
        <div>
            <TodoHead />
            <AddTodo todos={todos} setTodos={setTodos}/>
            {
                todos.length?<TodoLists todos={todos} setTodos={setTodos}/>
                :
                <span>No toods found.</span>
            }
        </div>
    );
};

export default Todos;