import React, { Component } from 'react';

class List extends Component {
    render() {
        const devList = this.props.developers.map((developer, index) => {
            return <li key={index}><a href={developer.link}>{developer.name}</a></li>;
        });

        return (<ul>
            {devList}
        </ul>);
    }
}

export default List;