import styles from './CommentComponent.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStateType } from '../../redux/reduxTK/store';
import { Comment } from '../../redux/reducers/commentReducer';
import { CommentRTK, getCommentsThunkRTK } from '../../redux/reduxTK/slices/commentSlice';
import { getPostThunkRTK } from '../../redux/reduxTK/slices/postSlice';
import { PostRTK } from '../../redux/reduxTK/slices/postSlice';

const CommentComponent = () => {
    const comments = useSelector((store: AppStateType) => store.commentReducer.comments) as Comment[];
    const post = useSelector((store: AppStateType) => store.postReducer.post) as PostRTK | undefined;
    const dispatch = useDispatch<AppDispatch>();
    const fetchComments = () => dispatch(getCommentsThunkRTK());
    const fetchPostById = (postId: number) => dispatch(getPostThunkRTK(postId));

    useEffect(() => {
      fetchComments();
    }, [dispatch]);
  
  
    return (
      <div>
      <ol >  
      {comments?.map((comment: CommentRTK) =>(
      <li key={comment.id} className={styles.box}>
      <div>postId: {comment.postId}</div>
      <div>id: {comment.id}</div>
      <div>name: {comment.name}</div>
      <div>email: {comment.email}</div> 
      <div>body: {comment.body}</div> 
      <button className={styles.button} onClick={() => fetchPostById(comment.postId)}>Показати пост</button>
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