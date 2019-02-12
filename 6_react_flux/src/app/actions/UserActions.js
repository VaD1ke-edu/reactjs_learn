import dispatcher from '../Dispatcher';
import {ADD_USER_EVENT, UPDATE_USERS_EVENT, CURRENT_USER_EVENT} from "../constants/userConstants";

function getData() {
    return [
        {id: 1, name: 'Test1', email: 'test1@test.com'},
        {id: 2, name: 'Test2', email: 'test2@test.com'}
    ];
}

export function getUsers() {
    dispatcher.dispatch({
        type: UPDATE_USERS_EVENT,
        data: getData()
    });
}

export function getUserById(id) {
    const user = getData().find(user => +user.id === +id) || {};
    dispatcher.dispatch({
        type: CURRENT_USER_EVENT,
        data: user
    });
}

export function addUser(name, email) {
    dispatcher.dispatch({
        type: ADD_USER_EVENT,
        data: {name, email}
    });
}