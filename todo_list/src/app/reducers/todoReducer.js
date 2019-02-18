import {
    ADD_TODO, DELETE_TODO, CHECK_TODO,
    FETCH_TODOS_PROCESS, FETCH_TODOS_REJECTED, FETCH_TODOS_FULFILLED,
    SAVE_TODOS_PROCESS, SAVE_TODOS_FULFILLED
} from '../constants/todoConstants';
import {
    CHECK_ALL, SHOW_CHECKED, SHOW_NOT_CHECKED, SHOW_ALL
} from '../constants/toolbarConstants';

const defaultTodosState = {
    data: [],
    visibleData: [],
    fetching: false,
    fetched: false,
    saving: false,
    saved: false,
    error: null
};

function setNewItems(state, items) {
    return {...state , visibleData: items};
}

export function todosReducer(state = defaultTodosState, action) {
    switch (action.type) {
        case FETCH_TODOS_PROCESS:
            return {...state, fetching: true};
        case FETCH_TODOS_REJECTED:
            return {...state, fetching: false, error: action.payload};
        case FETCH_TODOS_FULFILLED:
            return {...state, fetching: false, fetched: true, data: action.payload, visibleData: action.payload};
        case ADD_TODO:
            let item = action.payload;
            item.id = state.data.length + 1;
            let newData = [...state.data, action.payload];
            return {...state , data: newData, visibleData: newData};
            // TODO: тут проверка на чекбоксы
        case DELETE_TODO:
            const idToDelete = action.payload.id;
            return setNewItems(state, state.data.filter((item) => item.id !== idToDelete));
        case CHECK_TODO:
            const itemToCheck = action.payload;
            const checkedItems = state.data.map((item) => {
                if (item.id === itemToCheck.id) {
                    item.checked = !item.checked;
                }
                return item;
            });
            return setNewItems(state, checkedItems);
        case SAVE_TODOS_PROCESS:
            return {...state, saving: true, saved: false};
        case SAVE_TODOS_FULFILLED:
            return {...state, data: action.payload, saving: false, saved: true};
        case CHECK_ALL:
            return setNewItems(state, state.data.map(item => {item.checked = true; return item}));
        case SHOW_CHECKED:
            return setNewItems(state, state.data.filter(item => item.checked));
        case SHOW_NOT_CHECKED:
            return setNewItems(state, state.data.filter(item => !item.checked));
        case SHOW_ALL:
            return setNewItems(state, state.data);
    }
    return state;
}
