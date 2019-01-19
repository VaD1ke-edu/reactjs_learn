const URL = 'https://jsonplaceholder.typicode.com/users/';
const REQUEST_QTY = 10;

let promises = [];
for (let i = 1; i <= REQUEST_QTY; i++) {
    promises.push(new Promise((resolve, reject) => {
        fetch(URL + i)
            .then(response => {
                if (response.status !== 200) {
                    throw `Status of request #${i} is not OK`;
                } else {
                    resolve(response.json());
                }
            })
            .catch(error => { reject(error); })
    }));
}

Promise.all(promises)
    .then(values => { console.log(values); })
    .catch(errors => {console.log(errors);});