import React from 'react';

import PostList from "../post/List";
import {connect} from "react-redux";
import {getUserById} from "../../actions/UserActions";

class View extends React.Component {
    componentDidMount() {
        this.props.dispatch(getUserById(this.props.params.id));
    }

    render() {
        const user = this.props.currentUser;
        const postSection = user.id ? ( <div className="section"><PostList userId={user.id}/></div>) : '';

        return (<div>
            <div className="section">
                <h1 className="title">{user.name}</h1>
                <div>{user.email}</div>
            </div>
            {postSection}
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser.data
    };
}

export default connect(mapStateToProps)(View);
