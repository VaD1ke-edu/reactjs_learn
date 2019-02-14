import {ADD_COMMENT_EVENT, UPDATE_COMMENTS_EVENT, CURRENT_COMMENT_EVENT} from '../constants/commentConstants';
import dispatcher from '../Dispatcher';
import {EventEmitter} from 'events';

class CommentStore extends EventEmitter {
    constructor() {
        super();
        this._comments = [];
        this._currentComment = null;

        this.handleActions     = this.handleActions.bind(this);
        this.setComments       = this.setComments.bind(this);
        this.addComment        = this.addComment.bind(this);
        this.setCurrentComment = this.setCurrentComment.bind(this);
    }

    getComments() {
        return this._comments;
    }

    getCurrentComment() {
        return this._currentComment;
    }

    setCurrentComment(comment) {
        this._currentComment = comment;
        this.emitCurrentChange();
    }

    setComments(comments) {
        this._comments = comments;
        this.emitListChange();
    }

    addComment(comment) {
        this._comments = [comment, ...this._comments];
        this.emitListChange();
    }

    handleActions(action) {
        switch (action.type) {
            case ADD_COMMENT_EVENT:
                this.addComment(action.data);
                break;
            case UPDATE_COMMENTS_EVENT:
                this.setComments(action.data);
                break;
            case CURRENT_COMMENT_EVENT:
                this.setCurrentComment(action.data);
                break;
        }
    }

    emitListChange() {
        this.emit(UPDATE_COMMENTS_EVENT);
    }

    emitCurrentChange() {
        this.emit(CURRENT_COMMENT_EVENT);
    }
}

const store = new CommentStore();
dispatcher.register(store.handleActions);
export default store;
