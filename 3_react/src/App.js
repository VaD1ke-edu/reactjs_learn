import React, { Component } from 'react';
import ReactDom from 'react-dom';
import DeveloperList from './components/developer/list';
import DeveloperForm from './components/developer/form';

import './style/common.less';

class App extends Component {
    render() {
        const developers = [
            {name: 'Vlad', link: '/info?user=Vlad'},
            {name: 'Alex'},
        ];
        const managers = [
            {name: 'Denis', link: '/info?user=Denis'}
        ];

        return (<div>
            <h1 className="title">Developers</h1>
            <DeveloperList developers={developers}/>
            <DeveloperForm managers={managers}/>
        </div>);
    }
}

ReactDom.render(<App/>, document.querySelector('#root'));
