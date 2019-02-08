import React from 'react';

import PostStore from '../../stores/PostStore';
import PostItem from '../../components/post/Item';

import {addPost, getPosts, getPostsByUser} from "../../actions/PostActions";
import {UPDATE_POSTS_EVENT} from "../../constants/postConstants";

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };

        this.onPostChange = this.onPostChange.bind(this);
    }

    componentDidMount() {
        if (!this.props.children) {
            PostStore.on(UPDATE_POSTS_EVENT, this.onPostChange);
            this.props.userId ? getPostsByUser(this.props.userId) : getPosts();
        }
    }

    onPostChange() {
        this.setState({posts: PostStore.getPosts()});
    }

    render() {
        const posts = this.state.posts.map((item, index) => {
            const id = item.id || index;
            const link = '/posts/' + id;
            return <PostItem title={item.title} text={item.body} link={link} key={id} />;
        });

        return this.props.children ?
            (<div>{this.props.children}</div>) :
            (<div>
                <h1 className="title">Посты</h1>
                <div className="list">
                    {posts}
                </div>
            </div>);
    }
}

export default List;
