import {combineReducers} from 'redux';

import {todosReducer} from './todoReducer';
import {toolbarReducer} from './toolbarReducer';

export default combineReducers({
    todos: todosReducer,
    toolbar: toolbarReducer
});
