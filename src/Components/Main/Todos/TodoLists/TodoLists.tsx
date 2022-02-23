import React from 'react';
import { Container } from '@mui/material';
import SingleTodo from './SingleTodo';
interface todo{
    _id:string,
    todoName:string,
    todoDate:string
}

const TodoLists = ({todos,setTodos}:{
    todos:todo[],
    setTodos:Function
}) => {
    return (
        <div className='jtodo-container'>
            <Container>
                <ul className='jtodo-list-wrapper'>
                    {
                        todos.map(todo=><SingleTodo key={todo._id} todo={todo} todos={todos} setTodos={setTodos}/>)
                    }
                </ul>
            </Container>
        </div>
    );
};

export default TodoLists;