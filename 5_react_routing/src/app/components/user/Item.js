import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

class Item extends React.Component {
    render() {
        const emailLink = 'mailto:' + this.props.email;
        return (<div key={this.props.id || this.props.index} className="list__item">
            <Link to={this.props.link} className="list__link list__title">{this.props.name}</Link>
            <a href={emailLink} className="list__desc">{this.props.email}</a>
        </div>);
    }
}

Item.defaultProps = {
    link: '#'
};

Item.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string,
};

export default Item;