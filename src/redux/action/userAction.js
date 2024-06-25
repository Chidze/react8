export const userActionType = {
SET_TODOS : 'SET TODOS',
SET_COMMENTS: 'SET COMMENTS',
SET_ALBUMS: 'SET ALBUMS'
}


export const userActions = {
    setTodos : (todos) => ( { type: userActionType.SET_TODOS, payload: todos }),
    setComments : (comments) => ( { type: userActionType.SET_COMMENTS, payload: comments }),
    setAlbums : (albums) => ( { type: userActionType.SET_ALBUMS, payload: albums })
}