import React from 'react';
import '../style/modal.less';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    render() {
        return (
            <div>
                <Trigger toggleCallback={this.toggleModal}/>
                { this.state.hidden ? null : <Modal toggleCallback={this.toggleModal}/> }
            </div>
        );
    }

    toggleModal() {
        this.setState({hidden: !this.state.hidden});
    }

    componentDidMount() {
        this.toggleModal();
    }
}

class Trigger extends React.Component {
    render() {
        return (
            <button className="trigger" onClick={this.props.toggleCallback}>Show popup</button>
        );
    }
}

class Modal extends React.Component {
    render() {
        return (
            <div className="modal-wrapper show-modal">
                <div className="modal">
                    <span className="modal__close" onClick={this.props.toggleCallback}>&times;</span>
                    <h1 className="modal__title">Hello</h1>
                </div>
            </div>
        );
    }
}

export default WelcomeModal;