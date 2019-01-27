import React, { Component } from 'react';
import '../../style/form.less';

class Form extends Component {
    render() {
        const managerOptions = this.props.managers.map((manager, index) => {
            return <option key={index} value={manager.name}>{manager.name}</option>;
        });

        return (<form method="post" action="#" className="form">
            <div className="form__row">
                <label className="form__label" htmlFor="name">Name</label>
                <input name="name" className="form__input" id="name"/>
            </div>
            <div className="form__row">
                <label className="form__label" htmlFor="level">Level</label>
                <input name="level" className="form__input" id="level"/>
            </div>
            <div className="form__row">
                <label className="form__label" htmlFor="salary">Salary</label>
                <input name="salary" className="form__input" id="salary"/>
            </div>
            <div className="form__row">
                <label className="form__label">Manager options</label>
                <select name="manager" className="form__input">
                    <option value="">--Select--</option>
                    {managerOptions}
                </select>
            </div>
        </form>);
    }
}

export default Form;