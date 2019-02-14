
import './app/styles/common.less';
import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import HomePage from './app/pages/Home';
import PostListPage from './app/pages/post/List';
import NoRoute from './app/pages/NoRoute';
import About from './app/pages/About';
import Context from './app/context';

import './app/styles/common.less';
import TopMenu from './app/components/menu/Top';

const App = props => {
    const [page, setPage] = useState(window.location.hash);

    const switchPage = pageName => {
        console.log('switchPage', pageName);
        setPage(pageName);
    };

    let PageComponent = <NoRoute/>;
    switch (page) {
        case '':
        case '#':
            PageComponent = <HomePage/>;
            break;
        case '#about':
            PageComponent = <About/>;
            break;
        case '#posts':
            PageComponent = <PostListPage/>;
            break;
    }
    const links = [
        {link: '#', title: 'Главная'},
        {link: '#posts', title: 'Посты'},
        {link: '#about', title: 'О нас'},
    ];
    links.forEach((item) => {
        item.onClick = switchPage.bind(this, item.link);
    });

    return (
        <Context.Provider>
            <div className="narrow-container">
                <TopMenu links={links} currentPage={page}/>
                <section className="content">
                    {PageComponent}
                </section>
            </div>
        </Context.Provider>
    );
};

ReactDom.render(<App/>, document.querySelector('#root'));
