import React from 'react';

import UserItem from '../../components/user/Item';

import {addUser, getUsers} from '../../actions/UserActions';
import {connect} from 'react-redux';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.newUser = this.newUser.bind(this);
    }


    componentDidMount() {
        if (!this.props.children) {
            this.props.dispatch(getUsers());
        }
    }

    newUser() {
        this.props.dispatch(addUser('user', 'qwe@qwe.com'));
    }


    render() {
        const {children, users} = this.props;
        const userItems = users.map((item, index) => {
            const id = item.id || index;
            const link = '/users/' + id;
            return <UserItem {...item} link={link} key={id} />;
        });

        return children ?
            (<div>{children}</div>) :
            (<div>
                <h1 className="title">Пользователи</h1>
                <button onClick={this.newUser}>Добавить пользователя</button>
                <div className="list">
                    {userItems}
                </div>
            </div>);
    }
}


function mapStateToProps(state) {
    return {
        users: state.users.data,
        usersFetched: state.users.fetched
    };
}


export default connect(mapStateToProps)(List);
