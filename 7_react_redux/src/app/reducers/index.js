import {combineReducers} from 'redux';

import {commentsReducer, currentCommentReducer} from './commentReducers';
import {usersReducer, currentUserReducer} from './userReducers';
import {postsReducer, currentPostReducer} from './postReducers';

export default combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
    comments: commentsReducer,
    currentComment: currentCommentReducer,
    posts: postsReducer,
    currentPost: currentPostReducer
});
