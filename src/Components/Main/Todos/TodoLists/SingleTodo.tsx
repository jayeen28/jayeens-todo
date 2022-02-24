import React from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

interface singleTodo{
    _id:string,
    todoName:string,
    todoDate:string
}
const SingleTodo = ({todo,todos,setTodos}:{todo:singleTodo,todos:singleTodo[],setTodos:Function}) => {
    /**
     * This function is used for deleting a single todo item.
     * @param id The unique id of the todo.
     */
    const handleTodoDelete=(id:string)=>{
        const cloneTodos:singleTodo[]=[...todos];//deep clone todo so that it doesn't keep reference.
        const todoIndex:number=cloneTodos.findIndex(todoData=>todoData._id===id)//find the index of the targeted todo.
        cloneTodos.splice(todoIndex,1);//remove todo from cloned data
        setTodos(cloneTodos);//set new todos in to state.
        localStorage.setItem('jayeens-todos',JSON.stringify(cloneTodos))//set new todos in to local storage.
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