import React from 'react';
import CommentList from "../comment/List";
import PostProvider from "../../models/post/Provider";


class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };

        PostProvider.getItem(this.props.params.id).then((data) => {
            this.setState({post: data});
        })
    }

    render() {
        const commentsSection = this.state.post.id ? ( <div className="section">
                <CommentList postId={this.state.post.id}/>
            </div>) : '';
        return (<div>
            <div className="section">
                <h1 className="title">{this.state.post.title}</h1>
                <div className="description">
                    {this.state.post.body}
                </div>
            </div>
            {commentsSection}
        </div>);
    }
}

export default View;
