import axios from 'axios';

class Provider {
    static getList() {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data);
    }

    static getListByUser(userId) {
        return Provider.getList().then((data) => {
            return data.filter(item =>  +item.userId === +userId);
        });
    }

    static getItem(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.data);
    }
}

export default Provider;
