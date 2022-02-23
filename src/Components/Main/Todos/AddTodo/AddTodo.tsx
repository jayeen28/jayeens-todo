import {Snackbar } from '@mui/material';
import React, { useRef, useState } from 'react';

const AddTodo = ({todos,setTodos}:{
    todos:object[],
    setTodos:Function
}) => {
    const dateRef=useRef<HTMLInputElement>(null);
    const nameRef=useRef<HTMLInputElement>(null);
    const [showAlert,setShowAlert]=useState<boolean>(false);
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        if(nameRef.current&&dateRef.current){
            if(nameRef.current.value&&dateRef.current.value){
                const _id=Date.now()+'jayeensTodo'
            const todoName:string=nameRef.current.value;
            const todoDate:string=dateRef.current.value;
            const preparedTodo:object={todoName,todoDate,_id};
            setTodos((todos:object[])=>[...todos,preparedTodo]);
            localStorage.setItem('jayeens-todos',JSON.stringify([...todos,preparedTodo]))
            }
            else{
                setShowAlert(true);
            }
        }
    }
    
    return (
        <div>
         
         <form onSubmit={e=>handleSubmit(e)}>
                <input type="text" placeholder="Todo name" ref={nameRef}/>
                <input type="date" placeholder='Date' ref={dateRef}/>
                <button type='submit'>Add</button>  
         </form>
         <Snackbar
            open={showAlert}
            autoHideDuration={6000}
            onClose={()=>setShowAlert(false)}
            message="Please fill up all the information"
            />
        </div>
    );
};

export default AddTodo;