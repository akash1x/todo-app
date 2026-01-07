import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useAuth } from '../context/AuthContext';
import '../index.css';

const API_URL = '/api/todos';

function Home() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { logout, user } = useAuth();

    const fetchTodos = async () => {
        try {
            const response = await axios.get(API_URL);
            setTodos(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching todos:', err);
            setError('Failed to load todos');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async (text) => {
        try {
            const response = await axios.post(API_URL, { text });
            setTodos([response.data, ...todos]);
        } catch (err) {
            console.error('Error adding todo:', err);
        }
    };

    const toggleComplete = async (id, currentStatus) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, {
                completed: !currentStatus,
            });
            setTodos(
                todos.map((todo) =>
                    todo._id === id ? response.data : todo
                )
            );
        } catch (err) {
            console.error('Error updating todo:', err);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setTodos(todos.filter((todo) => todo._id !== id));
        } catch (err) {
            console.error('Error deleting todo:', err);
        }
    };

    return (
        <div className="app-container">
            <div className="todo-app">
                <div className="header">
                    <h1>To-Do List</h1>
                    <button onClick={logout} className="logout-btn">Logout ({user?.email})</button>
                </div>
                <TodoForm addTodo={addTodo} />
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : (
                    <TodoList
                        todos={todos}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                )}
            </div>
        </div>
    );
}

export default Home;
