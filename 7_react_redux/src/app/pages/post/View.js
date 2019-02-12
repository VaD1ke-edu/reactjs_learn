import React from 'react';
import CommentList from '../comment/List';
import {getPostById} from "../../actions/PostActions";
import {connect} from 'react-redux';

class View extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getPostById(this.props.params.id));
    }

    render() {
        console.log(this.props);
        const {currentPost} = this.props;
        const commentsSection = currentPost.id ? ( <div className="section">
                <CommentList postId={currentPost.id}/>
            </div>) : '';
        return (<div>
            <div className="section">
                <h1 className="title">{currentPost.title}</h1>
                <div className="description">
                    {currentPost.body}
                </div>
            </div>
            {commentsSection}
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        currentPost: state.currentPost.data
    };
}

export default connect(mapStateToProps)(View);
