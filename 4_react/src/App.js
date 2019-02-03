import React from 'react';
import ReactDom from 'react-dom';
import WelcomeModal from './components/WelcomeModal';
import Blog from './components/Blog';

import './style/common.less';

class App extends React.Component {
    render() {
        const posts = [
            {title: 'Post #1', description: 'Post about something', date: '28 january 2019'},
            {title: 'Post #2', description: 'Something about post', date: '29 january 2019'},
            {title: 'Post #3', description: 'Post something about', date: '30 january 2019'},
        ];
        return (<div>
            <h1 className="title">React 4 homework</h1>
            <WelcomeModal/>
            <Blog posts={posts}/>
        </div>);
    }
}

ReactDom.render(<App/>, document.querySelector('#root'));
