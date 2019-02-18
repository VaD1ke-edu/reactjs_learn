import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    render() {
        return (<div key={this.props.index} className="list-item">
            <a href={this.props.link} className="list-item__link list-item__title">{this.props.name}</a>
            <div className="list-item__info">{this.props.email}</div>
        </div>);
    }
}

Item.defaultProps = {
    link: '#'
};

Item.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default Item;