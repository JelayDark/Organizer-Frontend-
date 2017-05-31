import React, {Component} from 'react';
import ModalNewList from './ModalNewList';

class ModalButton extends Component {
    constructor() {
        super();
        this.state = {
            modal: false
        }

        this.addList = this.addList.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addList() {
        this.setState({modal: true});
    }

    closeModal() {
        this.setState({modal: false});
    }

    render() {
        return (
            <div>
                <button onClick={this.addList}>Add List</button>
                <ModalNewList visibility={this.state.modal} closeModal={this.closeModal}/>
            </div>
        )
    }

}

export default ModalButton;