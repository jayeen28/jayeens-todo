import React from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

interface singleTodo{
    _id:string,
    todoName:string,
    todoDate:string
}
const SingleTodo = ({todo,todos,setTodos}:{todo:singleTodo,todos:singleTodo[],setTodos:Function}) => {
    const handleTodoDelete=(id:string)=>{
        const cloneTodos:singleTodo[]=[...todos];
        const todoIndex:number=cloneTodos.findIndex(todoData=>todoData._id===id)
        cloneTodos.splice(todoIndex,1);
        setTodos(cloneTodos);
        localStorage.setItem('jayeens-todos',JSON.stringify(cloneTodos))
    }

    return (
        <li className='jtodo-singleList-container'>
            <div className='jtodo-singleList-wrapper'>
                {/* <DragIndicatorIcon fontSize='medium' className='todoDragIconWrapper'/> */}
                <span className='todoNameWrapper'>{todo.todoName}</span>
                <span className='todoDateWrapper'>{todo.todoDate}</span>
                <DeleteForeverOutlinedIcon className='todoDeleteWrapper' sx={{cursor:'pointer'}} onClick={()=>{handleTodoDelete(todo._id)}}/>
            </div>
        </li>
    );
};

export default SingleTodo;