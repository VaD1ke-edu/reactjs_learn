import React from 'react';

import PostList from "../post/List";
import UserStore from '../../stores/UserStore';
import {getUserById} from '../../actions/UserActions';
import {CURRENT_USER_EVENT} from '../../constants/userConstants';


class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        };

        this.onUserChange = this.onUserChange.bind(this);
    }

    componentDidMount() {
        UserStore.on(CURRENT_USER_EVENT, this.onUserChange);
        getUserById(this.props.params.id);
    }

    onUserChange() {
        this.setState({user: UserStore.getCurrentUser()});
    }

    render() {
        const postSection = this.state.user.id ? ( <div className="section">
            <PostList userId={this.state.user.id}/>
        </div>) : '';

        return (<div>
            <div className="section">
                <h1 className="title">{this.state.user.name}</h1>
                <div>{this.state.user.email}</div>
            </div>
            {postSection}
        </div>);
    }
}

export default View;
