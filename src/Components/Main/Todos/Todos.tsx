import React from 'react';
import TodoHead from './TodoHead/TodoHead';
import TodoLists from './TodoLists/TodoLists';

const Todos = () => {
    return (
        <div>
            <TodoHead />
            <TodoLists />
        </div>
    );
};

export default Todos;