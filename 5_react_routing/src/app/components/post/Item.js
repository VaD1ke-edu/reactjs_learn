import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    render() {
        return (<div key={this.props.index} className="list__item">
            <a href={this.props.link} className="list__link list__title">{this.props.title}</a>
            <div className="list__description">{this.props.text}</div>
        </div>);
    }
}

Item.defaultProps = {
    link: '#'
};

Item.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default Item;