import React from 'react';
import { Container } from '@mui/material';
import SingleTodo from './SingleTodo';

const TodoLists = () => {
    return (
        <div className='jtodo-container'>
            <Container>
                <ul className='jtodo-list-wrapper'>
                    <SingleTodo />
                </ul>
            </Container>
        </div>
    );
};

export default TodoLists;