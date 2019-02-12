export function postsReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_POSTS':
            return {...state, fetching: true};
        case 'FETCH_POSTS_REJECTED':
            return {...state, fetching: false, error: action.payload};
        case 'FETCH_POSTS_FULFILLED':
            return {...state, fetching: false, fetched: true, data: action.payload};
        case 'ADD_POST':
            return {...state , data: [...state.data, action.payload]};
    }
    return state;
}

export function currentPostReducer(state = {}, action) {
    switch (action.type) {

    }
    return state;
}