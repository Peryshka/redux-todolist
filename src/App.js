import './App.module.scss';
import styles from './App.module.scss';
import {useState} from 'react';
import MainInput from "./components/input";
import ButtonComponent from "./components/button";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "./redux/todo/selectors";
import {addTodo, deleteTodo, toggleTodo} from "./redux/todo/actions";
import TodoItem from "./components/todo-item";
import Typography from '@mui/material/Typography';
import FilterButtons from "./components/filter-buttons";
import {filterTodoActionCreator} from "./redux/filter/actions";

function App() {
  const [value, setValue] = useState([]);
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setValue(value)
  }

  const handleAddTodoByKey = (e) => {
    if (e.key === 'Enter') {
      const trimmedValue = value.trim();
      if (trimmedValue !== '') {
        dispatch(addTodo(trimmedValue))
        setValue("");
      }
    }
  }
  const handleAddTodo = () => {
    const trimmedValue = value.trim();
    if (trimmedValue !== '') {
      dispatch(addTodo(trimmedValue))
      setValue("");
    }
  }
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleFilterTodo = (filter) => {
     dispatch(filterTodoActionCreator(filter))
  }

  return (
    <div className={styles.container}>
      <Typography
        variant="h2"
        component="h2"
        className={styles.title}>
        TODO
      </Typography>
      <div className={styles.appWrap}>
        <MainInput
          value={value}
          onChange={handleChange}
          onKeyDown={handleAddTodoByKey}
        />
        <ButtonComponent
          onClick={handleAddTodo}
        >
          Add
        </ButtonComponent>
      </div>
      <div className={styles.todolistItem}>
        {todos.map((todo) => (
          <TodoItem
            text={todo.text}
            isComplete={todo.isComplete}
            onClick={() => handleToggleTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </div>
      <div className={styles.filterBtnWrap}>
        <FilterButtons onClick={() => handleFilterTodo ('SHOW_All')}>All</FilterButtons>
        <FilterButtons onClick={() => handleFilterTodo ('SHOW_ACTIVE')}>Active</FilterButtons>
        <FilterButtons onClick={() => handleFilterTodo ('SHOW_COMPLETED')}>Completed</FilterButtons>
        <FilterButtons>Clear Completed</FilterButtons>
      </div>
    </div>
  );
}

export default App;


