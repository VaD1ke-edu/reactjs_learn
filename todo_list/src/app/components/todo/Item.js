import React from 'react';

class Item extends React.Component {
    render() {
        const item = this.props.data;

        let todoClass = item.checked ? ' crossed' : '';

        return (<div className="list-item">
            <input className="list-item__check" type="checkbox" checked={!!item.checked} onChange={() => { this.props.onCheck(item) }}/>
            <div className={'list-item__todo' + todoClass}>{item.name}</div>
            <button className="list-item__delete" onClick={() => { this.props.onDelete(item) }}>x</button>
        </div>);
    }
}

export default Item;