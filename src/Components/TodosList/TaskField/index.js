import React, { useContext } from "react";
import { IconButton, ListItem, ListItemText, TextField } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './taskField.module.css'
import { Context } from "../../Context";

function TaskField(props) {
    const {setTodos} = useContext(Context)

    function handleChange(event) {
        setTodos(prev => {
            return prev.map((item, index) => {
                if (+event.target.id === index) {
                    item.isDone = !item.isDone
                }
                return item;
            })
        })
    }

    function handleClicked(id) {
        setTodos(prev => {
            return prev.map((item, index) => {
                if (index === +id) {
                    item.clicked = !item.clicked; 
                }
                if (item.title === '') {
                    deleteTodo(index)
                }
                return item;
            })
        })
    }

    function updateTodo(event) {
        setTodos(prev => {
            return prev.map( (item, index) => {
                if (index === +event.target.id) {
                    item.title = event.target.value;
                } 
                return item
            })
        })
    }

    function deleteTodo(id) {
        setTodos(prev => {
            return prev.filter((_, index) => id !== index)
        })
    }

    return (
        <ListItem className={styles.listItem}>
            <Checkbox
                id={props.id}
                checked = {props.completed}
                onChange = {(event) => handleChange(event)}
                color = 'default'
            />
            {!props.clicked ? 
                <>
                <ListItemText 
                    id={props.id}
                    primary={props.text} 
                    className={props.completed ? styles.doneTask : styles.undoneTask}
                    onClick={(event) => handleClicked(+event.target.parentNode.id)}
                    
                /> 
                <IconButton
                    onClick={(event) => deleteTodo(+event.currentTarget.id)}
                    id = {props.id}
                >
                    <DeleteIcon fontSize="small"/>
                </IconButton>
                </>
                : 
                <TextField 
                    id = {props.id}
                    data-id={props.id}
                    value={props.text}
                    onChange={(event => updateTodo(event))}
                    onBlur = {event => handleClicked(+event.target.id)}
                    onKeyDown={event => event.key === 'Enter' ? handleClicked(+event.target.id) : ''}
                />  
            }
        </ListItem>
    )
}

export default TaskField;
