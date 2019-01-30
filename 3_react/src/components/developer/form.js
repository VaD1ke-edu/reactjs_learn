import { Component } from 'react';
import '../../style/form.less';

class Form extends Component {
    render() {
        const managerOptions = this.props.managers.map((manager, index) => {
            return <option key={index} value={manager.name}>{manager.name}</option>;
        });

        return (<form method="post" action="#" className="form">
            <div className="form__title">
                Add new developer
            </div>
            <div className="form__row">
                <label className="form__label" htmlFor="name">Name</label>
                <input name="name" className="form__input" id="name" type="text"/>
            </div>
            <div className="form__row">
                <label className="form__label" htmlFor="level">Level</label>
                <input name="level" className="form__input" id="level" type="text"/>
            </div>
            <div className="form__row">
                <label className="form__label" htmlFor="salary">Salary</label>
                <input name="salary" className="form__input" id="salary" type="text"/>
            </div>
            <div className="form__row">
                <label className="form__label">Manager options</label>
                <select name="manager" className="form__input">
                    <option value="">--Select--</option>
                    {managerOptions}
                </select>
            </div>
            <div className="form__row form__row_btn">
                <input type="submit" className="form__btn" value="save"/>
            </div>
        </form>);
    }
}

export default Form;