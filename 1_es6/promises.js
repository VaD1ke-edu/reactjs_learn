const URL = 'https://jsonplaceholder.typicode.com/users/';
const REQUEST_QTY = 2;

let promises = [];
for (let i = 1; i <= REQUEST_QTY; i++) {
    promises.push(
        fetch(URL + i)
            .then(response => {
                if (response.status !== 200) {
                    throw `Status of request #${i} is not OK`;
                }
                return response.json();
            })
    );
}

Promise.all(promises)
    .then(values => { console.log(values); })
    .catch(errors => { console.log(errors); });