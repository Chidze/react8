import styles from './TodosComponent.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoThunk } from '../../redux/action/userAction';
import { AppDispatch, AppStateType } from '../../redux/store';
import { Todo } from '../../redux/reducers/todoReducer';


const TodosComponent = () => {
    const todos = useSelector( (store:AppStateType): Todo[] | [] => store.todoReducer.todos);
    const getTodos = () => dispatch(getTodoThunk())
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
    getTodos()
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