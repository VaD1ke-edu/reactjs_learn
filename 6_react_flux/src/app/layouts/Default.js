import React from 'react';
// import {} from 'react-router';

import TopMenu from '../components/menu/Top';

class Default extends React.Component {
    render() {
        return (<div className="narrow-container">
            <TopMenu/>
            <section className="content">
                {this.props.children}
            </section>
        </div>);
    }
}

export default Default;