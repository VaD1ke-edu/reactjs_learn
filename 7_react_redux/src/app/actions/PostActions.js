import axios from 'axios';
import {
    ADD_POST,
    FETCH_POSTS, FETCH_POSTS_REJECTED, FETCH_POSTS_FULFILLED,
    FETCH_CURRENT_POST, FETCH_CURRENT_POST_FULFILLED, FETCH_CURRENT_POST_REJECTED
} from '../constants/postConstants';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';


export function getPosts() {
    return function(dispatch) {
        dispatch({type: FETCH_POSTS});
        axios
            .get(API_URL)
            .then(response => {
                dispatch({type: FETCH_POSTS_FULFILLED, payload: response.data});
            })
            .catch(err => {
                dispatch({type: FETCH_POSTS_REJECTED, payload: err});
            })
    }
}

export function getPostsByUser(userId) {
    return function(dispatch) {
        dispatch({type: FETCH_POSTS});
        axios
            .get(API_URL)
            .then(response => {
                const data = response.data.filter(item => +item.userId === +userId);
                dispatch({type: FETCH_POSTS_FULFILLED, payload: data});
            })
            .catch(err => {
                dispatch({type: FETCH_POSTS_REJECTED, payload: err});
            })
    }
}

export function addPost(title, userId, body) {
    return {
        type: ADD_POST,
        payload: {title, userId, body}
    };
}

export function getPostById(id) {
    return function (dispatch) {
        dispatch({type: FETCH_CURRENT_POST});
        axios
            .get(API_URL + `/${id}`)
            .then(response => {
                dispatch({type: FETCH_CURRENT_POST_FULFILLED, payload: response.data});
            })
            .catch(err => {
                dispatch({type: FETCH_CURRENT_POST_REJECTED, payload: err});
            })
    }
}
