import React from 'react';
import {connect} from 'react-redux';

import TopMenu from '../components/menu/Top';

class Default extends React.Component {
    render() {
        return (<div className="narrow-container">
            <TopMenu/>
            <section className="content">
                {this.props.children}
            </section>
        </div>);
    }
}

export default Default;
//
// function mapStateToProps(state) {
//     return {
//         users: state.users.data,
//         posts: state.posts.data,
//         postsFetched: state.posts.fetched,
//         comments: state.comments.data,
//         currentUser: state.currentUser.data,
//         currentPost: state.currentPost.data,
//         currentComment: state.currentComment.data,
//     };
// }
//
// export default connect(mapStateToProps)(Default);