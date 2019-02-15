import React from 'react';

class Item extends React.Component {
    render() {
        const item = this.props.data;

        return (<div className="list-item">
            <input className="list-item__check" type="checkbox" defaultChecked={!!item.checked} onChange={() => { this.props.onCheck(item) }}/>
            <div className="list-item__todo">{item.name}</div>
            <button className="list-item__delete" onClick={() => { this.props.onDelete(item) }}>x</button>
        </div>);
    }
}

export default Item;