import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList=[
        {
            id: 1,
            title: 'Eat'       
        },

        {
            id: 2,
            title: 'SLeep'
        },

        {
            id: 3,
            title: 'Code'
        },
    ]
    return (
        <div>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;