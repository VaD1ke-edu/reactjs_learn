import React from 'react';
// import {} from 'react-router';

import MainMenu from '../components/menu/Main';

class Default extends React.Component {
    render() {
        return (<div className="narrow-container">
            <h1 className="title">React 5 homework</h1>
            <MainMenu/>
            {this.props.children}
        </div>);
    }
}

export default Default;