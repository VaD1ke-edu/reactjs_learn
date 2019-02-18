import {
    ADD_POST,
    FETCH_POSTS, FETCH_POSTS_REJECTED, FETCH_POSTS_FULFILLED,
    FETCH_CURRENT_POST, FETCH_CURRENT_POST_FULFILLED, FETCH_CURRENT_POST_REJECTED
} from '../constants/postConstants';

const defaultPostsState = {
    data: [],
    fetching: false,
    fetched: false,
    error: null
};
const defaultPostState = {
    data: {
        id: null,
        title: null,
        body: null,
    },
    fetching: false,
    fetched: false,
    error: null
};

export function postsReducer(state = defaultPostsState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, fetching: true};
        case FETCH_POSTS_REJECTED:
            return {...state, fetching: false, error: action.payload};
        case FETCH_POSTS_FULFILLED:
            return {...state, fetching: false, fetched: true, data: action.payload};
        case ADD_POST:
            return {...state , data: [...state.data, action.payload]};
    }
    return state;
}

export function currentPostReducer(state = defaultPostState, action) {
    switch (action.type) {
        case FETCH_CURRENT_POST:
            return {...state, fetching: true};
        case FETCH_CURRENT_POST_REJECTED:
            return {...state, fetching: false, error: action.payload};
        case FETCH_CURRENT_POST_FULFILLED:
            return {...state, fetching: false, fetched: true, data: action.payload};
    }
    return state;
}
