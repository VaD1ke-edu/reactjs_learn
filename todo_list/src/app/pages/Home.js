import React from 'react';

import List from '../components/todo/List';
import Toolbar from '../components/todo/Toolbar';

class Home extends React.Component {

    render() {
        return (<div>
            <h1 className="title">React</h1>
            <List/>
            <Toolbar/>
        </div>);
    }
}
export default Home;
