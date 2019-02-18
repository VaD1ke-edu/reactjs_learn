import axios from 'axios';

const API_URL = 'https://react-learn-d72a2.firebaseio.com/posts.json';

class Provider {
    static getList() {
        return axios.get(API_URL)
            .then(response => Object.values(response.data));
    }

    static addItem(item) {
        return axios.post(API_URL, item)
            .catch((msg) => console.log(msg));
    }
}

export default Provider;
