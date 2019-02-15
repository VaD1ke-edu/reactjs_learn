import {
    ADD_TODO, FETCH_TODOS, FETCH_TODOS_REJECTED, FETCH_TODOS_FULFILLED
} from '../constants/todoConstants';

const defaultToolbarState = {
    allChecked: false,
    allShowing: false
};

export function todosReducer(state = defaultTodosState, action) {
    switch (action.type) {
        case FETCH_TODOS_PROCESS:
            return {...state, fetching: true};
        case FETCH_TODOS_REJECTED:
            return {...state, fetching: false, error: action.payload};
        case FETCH_TODOS_FULFILLED:
            return {...state, fetching: false, fetched: true, data: action.payload};
        case ADD_TODO:
            return {...state , data: [...state.data, action.payload]};
    }
    return state;
}
