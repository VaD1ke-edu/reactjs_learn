import {
    ADD_USER,
    FETCH_USERS, FETCH_USERS_REJECTED, FETCH_USERS_FULFILLED,
    FETCH_CURRENT_USER, FETCH_CURRENT_USER_FULFILLED, FETCH_CURRENT_USER_REJECTED
} from '../constants/userConstants';

function getData() {
    return [
        {id: 1, name: 'Test1', email: 'test1@test.com'},
        {id: 2, name: 'Test2', email: 'test2@test.com'}
    ];
}

export function getUsers() {
    return {
        type: FETCH_USERS_FULFILLED,
        payload: getData()
    };
}

export function getUserById(id) {
    const user = getData().find(user => +user.id === +id) || {};
    return {
        type: FETCH_CURRENT_USER_FULFILLED,
        payload: user
    };
}

export function addUser(name, email) {
    return {
        type: ADD_USER,
        payload: {name, email}
    };
}