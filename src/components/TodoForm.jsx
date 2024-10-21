import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false });
        setTodo("");
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-gray-300 rounded-l-lg px-3 outline-none duration-150 bg-white/30 shadow-md hover:shadow-lg py-2"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md hover:shadow-lg transition duration-150">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
