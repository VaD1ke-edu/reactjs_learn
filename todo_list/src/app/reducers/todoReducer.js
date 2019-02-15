import {
    ADD_TODO, DELETE_TODO, CHECK_TODO,
    FETCH_TODOS_PROCESS, FETCH_TODOS_REJECTED, FETCH_TODOS_FULFILLED, SAVE_TODOS_FULFILLED
} from '../constants/todoConstants';

const defaultTodosState = {
    data: [],
    fetching: false,
    fetched: false,
    error: null
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
        case DELETE_TODO:
            const itemToDelete = action.payload;
            const newData = state.data.filter((item, index) => item.id !== itemToDelete.id);
            return {...state , data: newData};
        case CHECK_TODO:
            const itemToCheck = action.payload;
            const filteredData = state.data.map((item, index) => {
                if (item.id === itemToCheck.id) {
                    item.checked = !item.checked;
                }
                return item;
            });
            return {...state , data: filteredData};
        case SAVE_TODOS_FULFILLED:
            return {...state , data: action.payload};
    }
    return state;
}
