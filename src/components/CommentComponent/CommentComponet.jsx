import styles from './CommentComponent.module.css';
import { useEffect } from 'react';
import { getCommentsThunk, getPostThunk } from '../../redux/action/userAction';
import { useDispatch, useSelector } from 'react-redux';

const CommentComponent = () => {

    const comments = useSelector( (store) => store.commentReducer.comments);
    const post = useSelector( (store) => store.postReducer.post);
    
    const dispatch = useDispatch();
    const getComments = () => dispatch(getCommentsThunk())
    const getPostById = (postId) => { dispatch (getPostThunk(postId))}

    useEffect(() => {
      getComments()
  }, []);
  
  
    return (
      <div>
      <ol >  
      {comments?.map((comment) =>(
      <li key={comment.id} className={styles.box}>
      <div>postId: {comment.postId}</div>
      <div>id: {comment.id}</div>
      <div>name: {comment.name}</div>
      <div>email: {comment.email}</div> 
      <div>body: {comment.body}</div> 
      <button className={styles.button} onClick={() => getPostById(comment.postId)}>Показати пост</button>
      {post&& post.id && (
        <div className={styles.post}>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
     )}
      </li>
      ))}
     </ol>
    </div>
    ) 
}

export default CommentComponent