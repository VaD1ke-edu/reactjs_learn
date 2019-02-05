import React from 'react';
import CommentProvider from "../../models/comment/Provider";


class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: {}
        };

        CommentProvider.getItem(this.props.params.id).then((data) => {
            this.setState({comment: data});
        })
    }

    render() {
        return (<div>
            <h1 className="title">{this.state.comment.name}</h1>
            <div className="description">
                {this.state.comment.email}
            </div>
        </div>);
    }
}

export default View;
