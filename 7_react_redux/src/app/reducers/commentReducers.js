import {
    ADD_COMMENT,
    FETCH_COMMENTS, FETCH_COMMENTS_REJECTED, FETCH_COMMENTS_FULFILLED,
    FETCH_CURRENT_COMMENT, FETCH_CURRENT_COMMENT_FULFILLED, FETCH_CURRENT_COMMENT_REJECTED
} from '../constants/commentConstants';


const defaultCommentsState = {
    data: [],
    fetching: false,
    fetched: false,
    error: null
};
const defaultCommentState = {
    data: {
        id: null,
        name: null,
        email: null,
    },
    fetching: false,
    fetched: false,
    error: null
};


export function commentsReducer(state = defaultCommentsState, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {...state, fetching: true};
        case FETCH_COMMENTS_REJECTED:
            return {...state, fetching: false, error: action.payload};
        case FETCH_COMMENTS_FULFILLED:
            return {...state, fetching: false, fetched: true, data: action.payload};
        case ADD_COMMENT:
            return {...state , data: [...state.data, action.payload]};
    }
    return state;
}

export function currentCommentReducer(state = defaultCommentState, action) {
    switch (action.type) {
        case FETCH_CURRENT_COMMENT:
            return {...state, fetching: true};
        case FETCH_CURRENT_COMMENT_REJECTED:
            return {...state, fetching: false, error: action.payload};
        case FETCH_CURRENT_COMMENT_FULFILLED:
            return {...state, fetching: false, fetched: true, data: action.payload};
    }
    return state;
}
