import React, {Component} from 'react';

class ModalNewList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: null,
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
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
                        <form onSubmit={this.onSubmit}>
                            <h1>New List</h1>
                            <p>Введите название списка:</p>
                            <div><input type="text" placeholder="ListName"/></div>
                            <div className="errors">
                                {errors && <span>List already exists!</span>}
                            </div>
                            <div>
                                <button type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }

    }

}

export default ModalNewList;