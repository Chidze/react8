import styles from './AlbumsComponent.module.css'
import { useEffect } from 'react';
import { getAlbumsThunk } from '../../redux/action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { Album } from '../../redux/reducers/albumReducer';
import { AppDispatch, AppStateType } from '../../redux/store';

const AlbumsComponent = () => {
    const albums: Album[] = useSelector( (store:AppStateType) => store.albumReducer.albums);
    const dispatch: AppDispatch = useDispatch();
    const getAlbums = () => dispatch(getAlbumsThunk())
 
 
    useEffect(() => {
    getAlbums()
}, []);

return(
    <div>
        <ol>  
    {albums?.map((album) =>(
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