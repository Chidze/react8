import { PostService, TodoService, CommentService, AlbumService } from '../../services/apiService';


export const userActionType = {
SET_TODOS : 'SET TODOS',
SET_COMMENTS: 'SET COMMENTS',
SET_ALBUMS: 'SET ALBUMS',
SET_POST: 'SET POST'
}


export const userActions = {
    setTodos : (todos) => ( { type: userActionType.SET_TODOS, payload: todos }),
    setComments : (comments) => ( { type: userActionType.SET_COMMENTS, payload: comments }),
    setAlbums : (albums) => ( { type: userActionType.SET_ALBUMS, payload: albums }),
    setPost : (post) => ( { type: userActionType.SET_POST, payload: post } )
}

export const getTodoThunk = () => (dispatch) => {
    TodoService.getTodos(dispatch);
}

export const getAlbumsThunk = () => (dispatch) => {
    AlbumService.getAlbums(dispatch);
} 
 
export const getCommentsThunk = () => (dispatch) => {
    CommentService.getComments(dispatch);
} 

export const getPostThunk = (postId) => async dispatch => {
    try {
      const post = await PostService.getPost(postId);
      dispatch({ type: userActionType.SET_POST, payload: post });
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
} 

