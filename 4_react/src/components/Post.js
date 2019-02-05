import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
    render() {
        return (<div key={this.props.index} className="post">
            <h2 className="post__title">{this.props.title}</h2>
            <div className="post__description">{this.props.description}</div>
            <div className="post__date">{this.props.date}</div>
        </div>);
    }
}

Post.defaultProps = {
    description: ''
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default Post;