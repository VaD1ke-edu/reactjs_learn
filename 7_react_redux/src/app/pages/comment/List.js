import React from 'react';

import CommentItem from '../../components/comment/Item';

import {addComment, getComments, getCommentsByPost} from '../../actions/CommentActions';
import {connect} from 'react-redux';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.newComment = this.newComment.bind(this);
    }

    componentDidMount() {
        if (!this.props.children) {
            console.log(this.props.postId);
            this.props.dispatch(this.props.postId ? getCommentsByPost(this.props.postId) : getComments());
        }
    }

    newComment() {
        this.props.dispatch(addComment('custom comment', 'qwe@qwe.com'));
    }


    render() {
        const {children, comments} = this.props;

        const commentItems = comments.map((item, index) => {
            const id = item.id || index;
            const link = '/comments/' + id;
            return <CommentItem {...item} link={link} key={id} />;
        });

        return children ?
            (<div>{children}</div>) :
            (<div>
                <h1 className="title">Комментарии</h1>
                <button onClick={this.newComment}>Добавить пост</button>
                <div className="list">{commentItems}</div>
            </div>);
    }
}


function mapStateToProps(state) {
    return {
        comments: state.comments.data,
        commentsFetched: state.comments.fetched
    };
}


export default connect(mapStateToProps)(List);
