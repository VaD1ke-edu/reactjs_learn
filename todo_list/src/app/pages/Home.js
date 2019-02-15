import React from 'react';
import {connect} from 'react-redux';

import List from '../components/Todo/List';
import {saveTodos, getTodos, addTodo, checkTodo, deleteTodo} from '../actions/todoActions';

class Home extends React.Component {

    render() {
        return (<div>
            <h1 className="title">React</h1>
            <List/>
        </div>);
    }
}
export default Home;
