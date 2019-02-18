import React from 'react';
import {connect} from "react-redux";

import Item from './Item';
import Form from './Form';
import {saveTodos, getTodos, checkTodo, deleteTodo} from '../../actions/todoActions';

class List extends React.PureComponent {
    constructor(props) {
        super(props);

        this.saveTodos  = this.saveTodos.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.checkTodo  = this.checkTodo.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getTodos());
    }


    saveTodos() {
        this.props.dispatch(saveTodos(this.props.todos));
    }

    deleteTodo(item) {
        this.props.dispatch(deleteTodo(item));
    }

    checkTodo(item) {
        this.props.dispatch(checkTodo(item));
    }

    render() {
        const {todos, saved, saving} = this.props;

        const items = todos.map((item, index) => {
            return <Item data={item} key={index} onDelete={this.deleteTodo} onCheck={this.checkTodo} />
        });

        let statusBar = saved ? 'saved' : (saving ? '...saving' : false);

        return (<>
            <Form/>
            <div className="list">{items}</div>
            <button onClick={this.saveTodos}>save todos</button>
            {statusBar ? <div>{statusBar}</div> : ''}
        </>);
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos.visibleData,
        saving: state.todos.saving,
        saved: state.todos.saved
    };
}


export default connect(mapStateToProps)(List);
