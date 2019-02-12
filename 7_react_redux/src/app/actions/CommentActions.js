import dispatcher from '../Dispatcher';
import {ADD_COMMENT_EVENT, UPDATE_COMMENTS_EVENT, CURRENT_COMMENT_EVENT} from '../constants/commentConstants';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/comments';


export function getComments() {
    return axios
        .get(API_URL)
        .then(response => {
            dispatcher.dispatch({
                type: UPDATE_COMMENTS_EVENT,
                data: response.data
            })
        });
}

export function getCommentsByPost(postId) {
    return axios
        .get(API_URL)
        .then(response => {
            const data = response.data.filter(item =>  +item.postId === +postId);
            dispatcher.dispatch({
                type: UPDATE_COMMENTS_EVENT,
                data: data
            });
        });
}

export function addComment(name, email) {
    dispatcher.dispatch({
        type: ADD_COMMENT_EVENT,
        data: {name, email}
    });
}

export function getCommentById(id) {
    return axios.get(API_URL + `/${id}`)
        .then(response => {
            dispatcher.dispatch({
                type: CURRENT_COMMENT_EVENT,
                data: response.data
            });
        });
}