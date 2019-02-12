import {ADD_USER_EVENT, UPDATE_USERS_EVENT, CURRENT_USER_EVENT} from "../constants/userConstants";
import dispatcher from '../Dispatcher';
import {EventEmitter} from 'events';

class UserStore extends EventEmitter {
    constructor() {
        super(...arguments);
        this._users = [];
        this._currentUser = null;

        this.handleActions  = this.handleActions.bind(this);
        this.setUsers       = this.setUsers.bind(this);
        this.addUser        = this.addUser.bind(this);
        this.setCurrentUser = this.setCurrentUser.bind(this);
    }

    getUsers() {
        return this._users;
    }

    getCurrentUser() {
        return this._currentUser;
    }

    setCurrentUser(user) {
        this._currentUser = user;
        this.emitCurrentChange();
    }

    setUsers(users) {
        this._users = users;
        this.emitListChange();
    }

    addUser(user) {
        this._users.push(user);
        this.emitListChange();
    }

    handleActions(action) {
        switch (action.type) {
            case ADD_USER_EVENT:
                this.addUser(action.data);
                break;
            case UPDATE_USERS_EVENT:
                this.setUsers(action.data);
                break;
            case CURRENT_USER_EVENT:
                this.setCurrentUser(action.data);
                break;
        }
    }

    emitListChange() {
        this.emit(UPDATE_USERS_EVENT);
    }

    emitCurrentChange() {
        this.emit(CURRENT_USER_EVENT);
    }
}

const store = new UserStore();
dispatcher.register(store.handleActions);
export default store;
