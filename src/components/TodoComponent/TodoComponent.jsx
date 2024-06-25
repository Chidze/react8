import styles from './TodosComponent.module.css'
import { useEffect, useState } from 'react';
import { TodoService } from '../../services/apiService';
import { useDispatch, useSelector } from 'react-redux';


const TodosComponent = () => {
    // const [todos,  setTodos] = useState([]);
    const todos = useSelector( (store) => store.todoReducer.todos);

    const dispatch = useDispatch();

    useEffect(() => {
    TodoService.getTodos(dispatch);
    }, []);
return(
    <div>
        <ol>  
    {todos?.map((todo) =>(
    <li key={todo.id} className = {styles.box}>
    <div>userID: {todo.userId}</div>
    <div>id: {todo.id}</div>
    <div>title: {todo.title}</div> 
    <div>completed: {`${todo.completed}`}</div>
    </li>
    ))}
    </ol> 
    </div>
)
}

export default TodosComponent