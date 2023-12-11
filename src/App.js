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
import {FILTER_TYPE} from "./redux/todo-filter/reducers";
import {todoFilter} from "./redux/todo-filter/actions";
import {getActiveFilter} from "./redux/todo-filter/selectors";

function App() {
  const [value, setValue] = useState([]);
  const todos = useSelector(getTodos);
  const filterTodos = useSelector(getActiveFilter);
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

  const filterTodoFunc = (todos, filter) => {
    if (filter === FILTER_TYPE.SHOW_ALL) {
      return todos
    }
    if (filter === FILTER_TYPE.SHOW_ACTIVE) {
      return todos.filter(todo => !todo.isComplete)
    }
    if (filter === FILTER_TYPE.SHOW_COMPLETED) {
      return todos.filter(todo => todo.isComplete)
    }
    return todos
  }

  return (
    <div className={styles.container}>
      <Typography
        variant="h2"
        component="h2"
        className={styles.title}>
        TODOLIST
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
        {filterTodoFunc(todos, filterTodos).map((todo) => (
          <TodoItem
            text={todo.text}
            isComplete={todo.isComplete}
            onClick={() => handleToggleTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </div>
      <div className={styles.filterBtnWrap}>
        <button onClick={() => dispatch(todoFilter(FILTER_TYPE.SHOW_ALL))}>All</button>
        <button onClick={() => dispatch(todoFilter(FILTER_TYPE.SHOW_ACTIVE))}>Active</button>
        <button onClick={() => dispatch(todoFilter(FILTER_TYPE.SHOW_COMPLETED))}>Completed</button>
      </div>
    </div>
  );
}

export default App;




