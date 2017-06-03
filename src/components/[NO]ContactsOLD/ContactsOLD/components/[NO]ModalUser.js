import React, {Component} from 'react';
import ActiveUser from './ActiveUser';

class ModalUser extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            errors: null,
            // modal: false,
            data: this.props.data,
            active: this.props.data[active]
            // active: null
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    closeModal() {
        this.setState({modal: false});
    }

    render() {
        let {visibility} = this.props;
        let {errors} = this.state;

        if (visibility) {
            return (
                <div className="modal-container">
                    <div className="modal">
                        <div className="close">
                            <span onClick={this.props.closeModal}>x</span>
                        </div>
                        <div>
                        {/*<form onSubmit={this.onSubmit}>*/}
                            <ActiveUser 
                                data={this.state.data} active={this.state.active}
                            />
                            <div className="errors">
                                {errors && <span>List already exists!</span>}
                            </div>
                            {/*<div>
                                <button type="submit">Save</button>
                            </div>*/}
                        {/*</form>*/}
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }

    }

}

export default ModalUser;
