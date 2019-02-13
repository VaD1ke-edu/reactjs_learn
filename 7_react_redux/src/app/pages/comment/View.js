import React from 'react';
import {getCommentById} from "../../actions/CommentActions";
import {connect} from 'react-redux';


class View extends React.Component {
    componentDidMount() {
        this.props.dispatch(getCommentById(this.props.params.id));
    }

    render() {
        const comment = this.props.currentComment;
        return (<div>
            <h1 className="title">{comment.name}</h1>
            <div className="description">
                {comment.email}
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        currentComment: state.currentComment.data
    };
}

export default connect(mapStateToProps)(View);
