const defaultUsersState = {
    data: [],
    fetching: false,
    fetched: false,
    error: null
};
const defaultUserState = {
    data: {
        id: null,
        name: null,
        email: null,
    },
    fetching: false,
    fetched: false,
    error: null
};


export function usersReducer(state = defaultUsersState, action) {
    switch (action.type) {

    }
    return state;
}

export function currentUserReducer(state = defaultUserState, action) {
    switch (action.type) {

    }
    return state;
}