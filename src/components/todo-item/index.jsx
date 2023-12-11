import React from 'react';
import styles from './style.module.scss';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ClearIcon from '@mui/icons-material/Clear';

const TodoItem = (props) => {
  const {
    isComplete,
    text,
    onClick,
    onDelete
  } = props;

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
  }
  return (
    <div
      onClick={onClick}
      style={{
        textDecoration: isComplete ? 'line-through' : 'none'
      }}
      className={styles.todolistItem}>
      <List
        sx={{width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          className={styles.wrap}>
          <div className={styles.itemWrap}>
            {text}
          </div>
          <div>
            <ClearIcon
              onClick={handleDelete}
            />
          </div>
        </ListItemButton>
      </List>
    </div>
  )

}

export default TodoItem;

