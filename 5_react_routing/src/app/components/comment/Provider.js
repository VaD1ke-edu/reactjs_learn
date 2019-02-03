import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    render() {
        return (<div key={this.props.index} className="list__item">
            <a href={this.props.link} className="list__link">{this.props.name}</a>
        </div>);
    }
}

Item.defaultProps = {
    link: '#'
};

Item.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default Item;