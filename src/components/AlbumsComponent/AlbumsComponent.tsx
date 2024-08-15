import styles from './AlbumsComponent.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AlbumRTK } from '../../redux/reduxTK/slices/albumSlice';
import { AppDispatch, AppStateType } from '../../redux/reduxTK/store'; 
import { getAlbumsThunkRTK } from '../../redux/reduxTK/slices/albumSlice';

const AlbumsComponent = () => {
    const albums = useSelector((store: AppStateType) => store.albumReducer.albums);
    const dispatch = useDispatch<AppDispatch>();
 
    useEffect(() => {
        dispatch(getAlbumsThunkRTK());
    }, [dispatch]);

return(
    <div>
        <ol>  
    {albums?.map((album: AlbumRTK) =>(
    <li key={album.id} className={styles.box}>
    <div>userID: {album.userId}</div>
    <div>id: {album.id}</div>
    <div>title: {album.title}</div> 
    </li>
    ))}
    </ol>
    </div>
)
}

export default AlbumsComponent