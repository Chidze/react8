import styles from './TodosComponent.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStateType } from '../../redux/reduxTK/store';
import { getTodosThunkRTK, TodoRTK } from '../../redux/reduxTK/slices/todoSlice';


const TodosComponent = () => {
    const todos = useSelector((store: AppStateType) => store.todoReducer.todos);
    const dispatch = useDispatch<AppDispatch>();
 

    useEffect(() => {
        dispatch(getTodosThunkRTK());
    }, [dispatch]);

return(
    <div>
        <ol>  
    {todos?.map((todo: TodoRTK) =>(
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