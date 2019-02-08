import React from 'react';

import CommentStore from '../../stores/CommentStore';
import {getCommentById} from '../../actions/CommentActions';
import {CURRENT_COMMENT_EVENT} from '../../constants/commentConstants';

class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: {}
        };

        this.onCommentChange = this.onCommentChange.bind(this);
    }

    componentDidMount() {
        getCommentById(this.props.params.id);
        CommentStore.on(CURRENT_COMMENT_EVENT, this.onCommentChange);
    }

    onCommentChange() {
        this.setState({comment: CommentStore.getCurrentComment()});
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
