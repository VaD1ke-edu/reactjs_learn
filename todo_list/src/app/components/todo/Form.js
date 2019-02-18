import React from 'react';
import { connect } from 'react-redux';

import {addTodo} from '../../actions/todoActions';

class Form extends React.PureComponent {
    constructor(props) {
        super(props);
        this.input = '';
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.input.value.trim()) return;

        this.props.dispatch(addTodo({name: this.input.value, checked: false}));
        this.input.value = '';
    }


    render() {
        const item = this.props.data;

        return (<form className="form" onSubmit={this.onSubmit.bind(this)}>
            <input className="" type="text" ref={node => (this.input = node)}/>
            <button className="" type="submit">Add item</button>
        </form>);
    }
}

export default connect()(Form);