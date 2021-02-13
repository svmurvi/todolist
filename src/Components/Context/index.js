import React, { createContext, useState } from "react";

const Context = createContext();

const todoList = [{
    title: 'task 1',
    isDone: false,
	clicked: false,
},
{
    title: 'task 2',
    isDone: true,
	clicked: false,
},
{
    title: 'task 3',
    isDone: false,
	clicked: false,
}]

function AppContext({ children }) {
	const [todos, setTodos] = useState(todoList);
	const [input, setInput] = useState('')
	return (
		<Context.Provider
			value={{todos, setTodos, input, setInput}}
		>
			{children}
		</Context.Provider>
	);
}

export { AppContext, Context };