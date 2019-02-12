import {ADD_POST_EVENT, UPDATE_POSTS_EVENT, CURRENT_POST_EVENT} from "../constants/postConstants";
import dispatcher from '../Dispatcher';
import {EventEmitter} from 'events';

class PostStore extends EventEmitter {
    constructor() {
        super(...arguments);
        this._posts = [];
        this._currentPost = null;

        this.handleActions  = this.handleActions.bind(this);
        this.setPosts       = this.setPosts.bind(this);
        this.addPost        = this.addPost.bind(this);
        this.setCurrentPost = this.setCurrentPost.bind(this);
    }

    getPosts() {
        return this._posts;
    }

    getCurrentPost() {
        return this._currentPost;
    }

    setCurrentPost(post) {
        this._currentPost = post;
        this.emitCurrentChange();
    }

    setPosts(posts) {
        this._posts = posts;
        this.emitListChange();
    }

    addPost(post) {
        this._posts.unshift(post);
        this.emitListChange();
    }

    handleActions(action) {
        switch (action.type) {
            case ADD_POST_EVENT:
                this.addPost(action.data);
                break;
            case UPDATE_POSTS_EVENT:
                this.setPosts(action.data);
                break;
            case CURRENT_POST_EVENT:
                this.setCurrentPost(action.data);
                break;
        }
    }

    emitListChange() {
        this.emit(UPDATE_POSTS_EVENT);
    }

    emitCurrentChange() {
        this.emit(CURRENT_POST_EVENT);
    }
}

const store = new PostStore();
dispatcher.register(store.handleActions);
export default store;
