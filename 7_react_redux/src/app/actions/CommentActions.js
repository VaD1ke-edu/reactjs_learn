import {
    ADD_COMMENT,
    FETCH_COMMENTS, FETCH_COMMENTS_REJECTED, FETCH_COMMENTS_FULFILLED,
    FETCH_CURRENT_COMMENT, FETCH_CURRENT_COMMENT_FULFILLED, FETCH_CURRENT_COMMENT_REJECTED
} from '../constants/commentConstants';

import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/comments';


export function getComments() {
    return function(dispatch) {
        dispatch({type: FETCH_COMMENTS});
        axios
            .get(API_URL)
            .then(response => {
                dispatch({type: FETCH_COMMENTS_FULFILLED, payload: response.data});
            })
            .catch(err => {
                dispatch({type: FETCH_COMMENTS_REJECTED, payload: err});
            })
    }
}

export function getCommentsByPost(postId) {
    return function(dispatch) {
        dispatch({type: FETCH_COMMENTS});
        axios
            .get(API_URL)
            .then(response => {
                const data = response.data.filter(item => +item.postId === +postId);
                dispatch({type: FETCH_COMMENTS_FULFILLED, payload: data});
            })
            .catch(err => {
                dispatch({type: FETCH_COMMENTS_REJECTED, payload: err});
            })
    }
}

export function addComment(name, email) {
    return {
        type: ADD_COMMENT,
        payload: {name, email}
    }
}

export function getCommentById(id) {
    return function (dispatch) {
        dispatch({type: FETCH_CURRENT_COMMENT});
        axios
            .get(API_URL + `/${id}`)
            .then(response => {
                dispatch({type: FETCH_CURRENT_COMMENT_FULFILLED, payload: response.data});
            })
            .catch(err => {
                dispatch({type: FETCH_CURRENT_COMMENT_REJECTED, payload: err});
            })
    }
}