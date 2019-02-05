import axios from 'axios';

class Provider {
    static getList() {
        return axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.data);
    }

    static getListByPost(postId) {
        return Provider.getList().then((data) => {
            return data.filter(item =>  +item.postId === +postId);
        });
    }

    static getItem(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(response => response.data);
    }
}

export default Provider;