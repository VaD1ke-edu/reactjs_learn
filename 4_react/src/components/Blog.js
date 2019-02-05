import React from 'react';
import Post from './Post';

import '../style/blog.less';

class List extends React.Component {
    render() {
        const postList = this.props.posts.map((post, index) => {
            return <Post index={index} title={post.title} description={post.description} date={post.date}/>;
        });

        return (<div className="post-list">
            {postList}
        </div>);
    }
}

export default List;