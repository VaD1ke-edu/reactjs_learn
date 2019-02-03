import React from 'react';

import UserProvider from '../../models/user/Provider';

class View extends React.Component {
    render() {
        const data = UserProvider.getItem(this.props.params.id);

        return (<div>
            <h1 className="title">{data.name}</h1>
        </div>);
    }
}

export default View;
