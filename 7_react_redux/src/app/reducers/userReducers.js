import {
    ADD_USER,
    FETCH_USERS, FETCH_USERS_REJECTED, FETCH_USERS_FULFILLED,
    FETCH_CURRENT_USER, FETCH_CURRENT_USER_FULFILLED, FETCH_CURRENT_USER_REJECTED
} from '../constants/userConstants';


const defaultUsersState = {
    data: [],
    fetching: false,
    fetched: false,
    error: null
};
const defaultUserState = {
    data: {
        id: null,
        name: null,
        email: null,
    },
    fetching: false,
    fetched: false,
    error: null
};


export function usersReducer(state = defaultUsersState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {...state, fetching: true};
        case FETCH_USERS_REJECTED:
            return {...state, fetching: false, error: action.payload};
        case FETCH_USERS_FULFILLED:
            return {...state, fetching: false, fetched: true, data: action.payload};
        case ADD_USER:
            return {...state , data: [...state.data, action.payload]};
    }
    return state;
}

export function currentUserReducer(state = defaultUserState, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return {...state, fetching: true};
        case FETCH_CURRENT_USER_REJECTED:
            return {...state, fetching: false, error: action.payload};
        case FETCH_CURRENT_USER_FULFILLED:
            return {...state, fetching: false, fetched: true, data: action.payload};
    }
    return state;
}
