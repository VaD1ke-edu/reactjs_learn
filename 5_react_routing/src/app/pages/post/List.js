import React from 'react';

import PostProvider from '../../models/post/Provider';
import PostItem from '../../components/post/Item';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };

        if (!this.props.children) {
            const posts = this.props.userId ? PostProvider.getListByUser(this.props.userId) : PostProvider.getList();
            posts.then((data) => {
                this.setState({posts: data});
            });
        }
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
