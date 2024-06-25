import axios from "axios";
import { userActions } from "../redux/action/userAction";
const API_URL = 'https://jsonplaceholder.typicode.com';


export const AlbumService = {
        getAlbums: async (dispatch) => {
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
    getTodos: async (dispatch) => {
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
    getComments: async (dispatch) => {
        try {
            let response = await axios.get(`${API_URL}/comments`);
            dispatch(userActions.setComments(response.data))
        } catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    },
};