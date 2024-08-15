import { AlbumRTK } from "../redux/reduxTK/slices/albumSlice";
import { TodoRTK } from "../redux/reduxTK/slices/todoSlice";
import { CommentRTK } from "../redux/reduxTK/slices/commentSlice";
import axios from 'axios';

export const AlbumService = {
    getAlbums: async (): Promise<AlbumRTK[]> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      if (!response.ok) {
        throw new Error('Failed to fetch albums');
      }
      return await response.json();
    },
  };

export const TodoService = {
    getTodos: async (): Promise<TodoRTK[]> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      return await response.json();
    },
};
  

export const CommentService = {
  getComments: async (): Promise<CommentRTK[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return await response.json();
  },
};

export const PostService = {
  getPost: async (postId: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        return response.data;
    }
  
};