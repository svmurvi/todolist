import { List } from '@material-ui/core';
import React, { useContext } from 'react';
import { Context } from '../Context';
import TaskField from './TaskField';
import styles from './todosList.module.css';

function TodosList() {
  const { todos } = useContext(Context);
  const todosList = todos.map((item, index) => (
    <TaskField
      key={index}
      id={String(index)}
      text={item.title}
      completed={item.isDone}
      clicked={item.clicked}
    />
  ));
  return (
    <List className={styles.list}>
      {todosList}
    </List>
  );
}

export default TodosList;
