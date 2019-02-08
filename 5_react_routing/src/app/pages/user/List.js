import React from 'react';

import UserStore from '../../stores/UserStore';
import UserItem from '../../components/user/Item';

import {addUser, getUsers} from '../../actions/UserActions';
import {UPDATE_USERS_EVENT} from '../../constants/userConstants';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        this.onUserChange = this.onUserChange.bind(this);
    }
    
    componentDidMount() {
        if (!this.props.children) {
            UserStore.on(UPDATE_USERS_EVENT, this.onUserChange);
            getUsers();
        }
    }

    onUserChange() {
        this.setState({users: UserStore.getUsers()});
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
