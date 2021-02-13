import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './input.module.css'
import { Context } from '../Context';
import { Button } from '@material-ui/core';

function Input() {
    const {input, setInput, setTodos} = useContext(Context)
    function handleInputValue(event) {
        setInput(event.target.value)
    } 
    function addTodo() {
        if (input.length && input !== '') {
            setTodos(prev => {
                return [...prev, { title: input, isDone: false, clicked: false}]
            })
            setInput('')
        }
    }
    return (
        <>
        <TextField 
            className={styles.textField} 
            variant="outlined" 
            label="Input Task"
            value={input}
            onChange={event => handleInputValue(event)} 
            onKeyDown = {event => event.key === 'Enter' ? addTodo() : ""}
        />
        <Button 
            variant="outlined" 
            className={styles.buttonAdd}
            onClick={addTodo}
        >
            Add task
        </Button>
        </>
    )
}

export default Input;


