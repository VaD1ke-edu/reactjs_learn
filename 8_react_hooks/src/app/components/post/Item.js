import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
    return (<div key={props.index} className="list-item">
        <a href={props.link} className="list-item__link list-item__title">{props.title}</a>
        <div className="list-item__description">{props.text}</div>
    </div>);
};

Item.defaultProps = {
    link: '#'
};

Item.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default Item;