import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import DefaultLayout from 'Layouts/Default';
import HomePage from 'Pages/Home';
import AboutPage from 'Pages/About';
import CommentListPage from 'Pages/comment/List';
import CommentViewPage from 'Pages/comment/View';
import UserListPage from 'Pages/user/List';
import UserViewPage from 'Pages/user/View';
import PostListPage from 'Pages/post/List';
import PostViewPage from 'Pages/post/View';
import NoRoute from 'Pages/NoRoute';

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
