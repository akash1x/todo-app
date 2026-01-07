import React from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content" onClick={() => toggleComplete(todo._id, todo.completed)}>
                {todo.completed ? (
                    <CheckCircle className="icon completed-icon" size={20} />
                ) : (
                    <Circle className="icon" size={20} />
                )}
                <span className="todo-text">{todo.text}</span>
            </div>
            <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
                <Trash2 size={18} />
            </button>
        </div>
    );
};

export default TodoItem;
