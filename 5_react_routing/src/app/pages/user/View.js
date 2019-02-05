import React from 'react';

import UserProvider from '../../models/user/Provider';
import PostList from "../post/List";

class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        };

        if (!this.props.children) {
            UserProvider.getItem(this.props.params.id).then((data) => {
                this.setState({user: data});
            });
        }
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
