import styles from './AlbumsComponent.module.css'
import { useEffect, useState } from 'react';
import { AlbumService } from '../../services/apiService'; 
import { useDispatch, useSelector } from 'react-redux';

const AlbumsComponent = () => {
    // const [albums,  setAlbums] = useState([]);
    const albums = useSelector( (store) => store.albumReducer.albums);
    const dispatch = useDispatch();

  useEffect(() => {
    AlbumService.getAlbums(dispatch);
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