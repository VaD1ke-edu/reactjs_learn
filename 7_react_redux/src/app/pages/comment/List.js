import React from 'react';

import CommentProvider from '../../models/comment/Provider';
import CommentItem from '../../components/comment/Item';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };

        if (!this.props.children) {
            const comments = this.props.postId ? CommentProvider.getListByPost(this.props.postId) : CommentProvider.getList();
            comments.then((data) => {
                this.setState({comments: data});
            });
        }
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
