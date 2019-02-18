import React from 'react';
import { connect } from 'react-redux';

import {checkAll, showAll, showChecked, showNotChecked} from '../../actions/toolbarActions';

class Toolbar extends React.PureComponent {
    constructor(props) {
        super(props);

        this.checkAll    = this.checkAll.bind(this);
        this.showAll     = this.showAll.bind(this);
        this.showActive  = this.showActive.bind(this);
        this.showChecked = this.showChecked.bind(this);
    }

    checkAll() {
        this.props.dispatch(checkAll());
    }

    showAll() {
        this.props.dispatch(showAll());
    }

    showChecked() {
        this.props.dispatch(showChecked());
    }

    showActive() {
        this.props.dispatch(showNotChecked());
    }


    render() {
        const {allChecked, allShowing, checkedShowing, notCheckedShowing} = this.props.toolbar;
        const id = Date.now();

        return (<div>
            <div>
                <input id={'show_all_' + id} className="list-item__check" type="checkbox" checked={!!allShowing} onChange={this.showAll}/>
                <label htmlFor={'show_all_' + id}>Show all</label>
            </div>
            <div>
                <input id={'check_all_' + id} className="list-item__check" type="checkbox" checked={!!allChecked} onChange={this.checkAll}/>
                <label htmlFor={'check_all_' + id}>Check all</label>
            </div>
            <div>
                <input id={'show_complete_' + id} className="list-item__check" type="checkbox" checked={!!checkedShowing} onChange={this.showChecked}/>
                <label htmlFor={'show_complete_' + id}>Show complete</label>
            </div>
            <div>
                <input id={'show_active_' + id} className="list-item__check" type="checkbox" checked={!!notCheckedShowing} onChange={this.showActive}/>
                <label htmlFor={'show_active_' + id}>Show active</label>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        toolbar: state.toolbar
    };
}

export default connect(mapStateToProps)(Toolbar);