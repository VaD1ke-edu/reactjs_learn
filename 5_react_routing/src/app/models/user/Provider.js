class Provider {
    static getList() {
        return new Promise((resolve) => {
            resolve([
                {id: 1, name: 'Test1', email: 'test1@test.com'},
                {id: 2, name: 'Test2', email: 'test2@test.com'}
            ]);
        });
    }

    static getItem(id) {
        return new Promise((resolve,) => {
            resolve(Provider.getList()[id] || {});
        });
    }
}

export default Provider;