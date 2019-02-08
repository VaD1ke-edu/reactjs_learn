import React from 'react';
import CommentList from "../comment/List";

import PostStore from '../../stores/PostStore';
import {getPostById} from "../../actions/PostActions";
import {CURRENT_POST_EVENT} from "../../constants/postConstants";

class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
        this.onPostChange = this.onPostChange.bind(this);
    }

    componentDidMount() {
        getPostById(this.props.params.id);
        PostStore.on(CURRENT_POST_EVENT, this.onPostChange);
    }

    onPostChange() {
        this.setState({post: PostStore.getCurrentPost()});
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
