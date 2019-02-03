import axios from 'axios';

class Provider {
    static getList() {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }

    static getItem(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
}

export default Provider;