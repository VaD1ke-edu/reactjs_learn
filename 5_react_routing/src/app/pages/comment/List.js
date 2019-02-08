import React from 'react';

import CommentStore from '../../stores/CommentStore';
import CommentItem from '../../components/comment/Item';

import {addComment, getComments, getCommentsByPost} from '../../actions/CommentActions';
import {UPDATE_COMMENTS_EVENT} from '../../constants/commentConstants';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };

        this.onCommentChange = this.onCommentChange.bind(this);
    }

    componentDidMount() {
        if (!this.props.children) {
            CommentStore.on(UPDATE_COMMENTS_EVENT, this.onCommentChange);
            this.props.postId ? getCommentsByPost(this.props.postId) : getComments();
        }
    }

    onCommentChange() {
        this.setState({comments: CommentStore.getComments()});
    }

    render() {
        const comments = this.state.comments.map((item, index) => {
            const id = item.id || index;
            const link = '/comments/' + id;
            return <CommentItem {...item} link={link} key={id} />;
        });

        return this.props.children ?
            (<div>{this.props.children}</div>) :
            (<div>
                <h1 className="title">Комментарии</h1>
                <div className="list">{comments}</div>
            </div>);
    }
}

export default List;
