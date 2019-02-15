import React from 'react';

class Default extends React.Component {
    render() {
        return (<div className="narrow-container">
            <h1>React ToDo List</h1>
            <section className="content">
                {this.props.children}
            </section>
        </div>);
    }
}

export default Default;
