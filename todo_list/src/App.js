import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import store from './app/store';
import DefaultLayout from './app/layouts/Default';
import HomePage from './app/pages/Home';

import './app/styles/common.less';

ReactDom.render(
    <Provider store={store}>
        <DefaultLayout>
            <HomePage/>
        </DefaultLayout>
    </Provider>,
    document.querySelector('#root')
);
