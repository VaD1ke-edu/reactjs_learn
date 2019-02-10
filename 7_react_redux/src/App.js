import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import DefaultLayout from './app/layouts/Default';
import HomePage from './app/pages/Home';
import AboutPage from './app/pages/About';
import CommentListPage from './app/pages/comment/List';
import CommentViewPage from './app/pages/comment/View';
import UserListPage from './app/pages/user/List';
import UserViewPage from './app/pages/user/View';
import PostListPage from './app/pages/post/List';
import PostViewPage from './app/pages/post/View';
import NoRoute from './app/pages/NoRoute';

import './app/styles/common.less';


ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={DefaultLayout}>
            <IndexRoute component={HomePage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="posts" component={PostListPage}>
                <Route path=":id" component={PostViewPage}/>
            </Route>
            <Route path="comments" component={CommentListPage}>
                <Route path=":id" component={CommentViewPage}/>
            </Route>
            <Route path="users" component={UserListPage}>
                <Route path=":id" component={UserViewPage}/>
            </Route>
            <Route path="*" component={NoRoute}/>
        </Route>
    </Router>,
    document.querySelector('#root')
);
