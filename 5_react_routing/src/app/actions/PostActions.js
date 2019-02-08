import dispatcher from '../Dispatcher';
import {ADD_POST_EVENT, UPDATE_POSTS_EVENT, CURRENT_POST_EVENT} from '../constants/postConstants';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';


export function getPosts() {
    return axios
        .get(API_URL)
        .then(response => {
            dispatcher.dispatch({
                type: UPDATE_POSTS_EVENT,
                data: response.data
            })
        });
}

export function getPostsByUser(userId) {
    return axios
        .get(API_URL)
        .then(response => {
            const data = response.data.filter(item => +item.userId === +userId);
            dispatcher.dispatch({
                type: UPDATE_POSTS_EVENT,
                data: data
            });
        });
}

export function addPost(title, userId, body) {
    dispatcher.dispatch({
        type: ADD_POST_EVENT,
        data: {title, userId, body}
    });
}

export function getPostById(id) {
    return axios.get(API_URL + `/${id}`)
        .then(response => {
            dispatcher.dispatch({
                type: CURRENT_POST_EVENT,
                data: response.data
            });
        });
}