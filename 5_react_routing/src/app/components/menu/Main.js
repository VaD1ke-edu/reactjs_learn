import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
    render() {
        return (<div>
            <Link className="post__title" to="/">home</Link>
            <Link className="post__description" to="/about">about</Link>
        </div>);
    }
}

export default Main;