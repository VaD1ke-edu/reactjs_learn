import { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
    render() {
        return (<li key={this.props.index} className="list__item">
            <a href={this.props.link} className="list__link">{this.props.name}</a>
        </li>);
    }
}

ListItem.defaultProps = {
    link: '#'
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default ListItem;