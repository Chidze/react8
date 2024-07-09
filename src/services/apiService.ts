import axios from "axios";
import { userActions } from "../redux/action/userAction";
import { AppDispatch } from "../redux/store";
const API_URL = 'https://jsonplaceholder.typicode.com';


export const AlbumService = {
        getAlbums: async (dispatch: AppDispatch) => {
            try {
                let response = await axios.get(`${API_URL}/albums`);
                dispatch(userActions.setAlbums(response.data))
            } catch (error) {
                console.error('Error fetching albums:', error);
                throw error;
            }
        },
    };

export const TodoService = {
    getTodos: async (dispatch: AppDispatch) => {
        try {
            let response = await axios.get(`${API_URL}/todos`);
            dispatch(userActions.setTodos(response.data))
        } catch (error) {
            console.error('Error fetching todos:', error);
            throw error;
        }
    },
};
export const CommentService = {
    getComments: async (dispatch: AppDispatch) => {
        try {
            let response = await axios.get(`${API_URL}/comments`);
            dispatch(userActions.setComments(response.data))
        } catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    },
};

export const PostService = {
    getPost: async ( postId: number)  => {
        try { 
        let response = await axios.get(`${API_URL}/posts/${postId}`);
        return response.data;
        }
        catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    },
};