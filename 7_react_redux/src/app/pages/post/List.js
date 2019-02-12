import React from 'react';

import PostItem from '../../components/post/Item';

import {addPost, getPosts, getPostsByUser} from "../../actions/PostActions";

import {connect} from 'react-redux';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.newPost = this.newPost.bind(this);
    }

    componentDidMount() {
        if (!this.props.children) {
            this.props.dispatch(this.props.userId ? getPostsByUser(this.props.userId) : getPosts());
        }
    }

    newPost() {
        this.props.dispatch(addPost('custom post', 1, 'custom post description'));
    }


    render() {
        const {children, posts} = this.props;
        const postItems = this.props.posts.map((item, index) => {
            const id = item.id || index;
            const link = '/posts/' + id;
            return <PostItem title={item.title} text={item.body} link={link} key={id} />;
        });

        return children ?
            (<div>{children}</div>) :
            (<div>
                <h1 className="title">Посты</h1>
                <button onClick={this.newPost}>Добавить пост</button>
                <div className="list">
                    {postItems}
                </div>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.data,
        postsFetched: state.posts.fetched
    };
}


export default connect(mapStateToProps)(List);