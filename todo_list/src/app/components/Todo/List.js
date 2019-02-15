import React from 'react';
import {connect} from "react-redux";

import Item from './Item';
import {saveTodos, getTodos, addTodo, checkTodo, deleteTodo} from '../../actions/todoActions';

class List extends React.Component {
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
        const items = this.props.todos.map((item, index) => {
            return <Item data={item} key={index} onDelete={this.deleteTodo} onCheck={this.checkTodo} />
        });

        return (<>
            <div className="list">{items}</div>
            <button onClick={this.saveTodos}>save todos</button>
        </>);
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos.data
    };
}


export default connect(mapStateToProps)(List);
