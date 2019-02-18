import React, {useState, useEffect} from 'react';

import PostProvider from '../../models/post/Provider';
import PostItem from '../../components/post/Item';

const List = props => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostProvider.getList().then((data) => {
            console.log(data);
            setPosts(data);
        });
    }, []);

    const addPost = () => {
        const maxId = Math.max.apply(Math, posts.map(o => o.id));
        const newPost = {id: maxId + 1, title: 'title', body: 'body'};
        PostProvider.addItem(newPost).then(() => {setPosts([newPost, ...posts]);});
    };

    const postItems = posts.map((item, index) => {
        const id = item.id || index;
        const link = '/posts/' + id;
        return <PostItem title={item.title} text={item.body} link={link} key={id} />;
    });

    return (<div>
            <h1 className="title">Посты</h1>
            <button onClick={addPost}>Добавить пост</button>
            <div className="list">
                {postItems}
            </div>
        </div>);
};

export default List;
