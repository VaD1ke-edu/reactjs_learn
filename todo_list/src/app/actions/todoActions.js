import axios from 'axios';
import {
    ADD_TODO, CHECK_TODO, DELETE_TODO,
    SAVE_TODOS_PROCESS, SAVE_TODOS_FULFILLED, SAVE_TODOS_REJECTED,
    FETCH_TODOS_PROCESS, FETCH_TODOS_FULFILLED, FETCH_TODOS_REJECTED
} from '../constants/todoConstants';

const API_URL = 'https://react-learn-d72a2.firebaseio.com/todos.json';


export function saveTodos(data) {
    // data = [{id: 1, name: 'qwe1'}, {id: 2, name: 'qwe2'}];
    console.log(data);
    return function(dispatch) {
        dispatch({type: SAVE_TODOS_PROCESS});
        axios
            .put(API_URL, data)
            .then(response => {
                dispatch({type: SAVE_TODOS_FULFILLED, payload: data});
            })
            .catch(err => {
                dispatch({type: SAVE_TODOS_REJECTED, payload: err});
            })
    }
}

export function getTodos() {
    return function(dispatch) {
        dispatch({type: FETCH_TODOS_PROCESS});
        axios
            .get(API_URL)
            .then(response => {
                let data = response.data || [];
                dispatch({type: FETCH_TODOS_FULFILLED, payload: data});
            })
            .catch(err => {
                dispatch({type: FETCH_TODOS_REJECTED, payload: err});
            })
    }
}

export function addTodo(item) {
    return function(dispatch) {
        dispatch({type: ADD_TODO, payload: item})
    }
}

export function checkTodo(item) {
    return function(dispatch) {
        dispatch({type: CHECK_TODO, payload: item})
    }
}

export function deleteTodo(item) {
    return function(dispatch) {
        dispatch({type: DELETE_TODO, payload: item})
    }
}
