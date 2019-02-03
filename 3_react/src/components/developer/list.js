import React from 'react';
import ListItem from './listItem';

import '../../style/list.less';

class List extends React.Component {
    render() {
        const devList = this.props.developers.map((developer, index) => {
            return <ListItem index={index} link={developer.link} name={developer.name}/>;
        });

        return (<ul className="list">
            {devList}
        </ul>);
    }
}

export default List;