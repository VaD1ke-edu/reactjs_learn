import React from 'react';

import UserProvider from '../../models/user/Provider';
import UserItem from '../../components/user/Item';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        UserProvider.getList().then((data) => {
            this.setState({users: data});
        })
    }


    render() {
        const users = this.state.users.map((item, index) => {
            const link = '/user/' + index;
            return <UserItem {...item} index={index} link={link}/>;
        });

        return (<div>
            <h1 className="title">Пользователи</h1>
            <div className="list">
                {users}
            </div>
        </div>);
    }
}

export default List;
