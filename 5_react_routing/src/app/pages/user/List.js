import React from 'react';

import UserProvider from '../../models/user/Provider';
import UserItem from '../../components/user/Item';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };


        if (!this.props.children) {
            UserProvider.getList().then((data) => {
                this.setState({users: data});
            });
        }
    }


    render() {
        const users = this.state.users.map((item, index) => {
            const id = item.id || index;
            const link = '/users/' + id;
            return <UserItem {...item} link={link} key={id} />;
        });

        return this.props.children ?
            (<div>{this.props.children}</div>) :
            (<div>
                <h1 className="title">Пользователи</h1>
                <div className="list">
                    {users}
                </div>
            </div>);
    }
}

export default List;
