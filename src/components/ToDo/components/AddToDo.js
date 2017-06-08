import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, ADD_TODO } from '../../../actions/lists';
import PropTypes from 'prop-types';

class AddToDo extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            task: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    isValid() {
        const { task } = this.state;
        return task.length !== 0;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const input = document.querySelector('input');
        input.value = '';

        if(this.isValid()) {
            let todo = {
                id: this.props.active,
                task: this.state.task,
                isCompleted: false
            }

            this.props.addTodo(todo).then((response) =>{
                console.log(response);
                const store = this.context.store;
                store.dispatch({type: "ADD_TODO", payload: response.data.value.needs[response.data.value.needs.length-1]}); 
            }).catch((err) => {
                console.log(err);
            })

            this.setState({task: ''});

        } else {
            return <div>Enter Something!</div>
        }
    }

    render() {
            if(this.props.active) { return (
                        <form className = "form-inline" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input className="form-control" onChange={this.onChange} type="text" placeholder="What do u need 2 do?" name="task"/>
                            </div>
                                <button className="btn btn-primary" type="submit">Add ToDo</button>
                            {/*<div>*/}
                            {/*</div>*/}
                        </form>
            )} else return <div>No lists active</div>
    }

}

AddToDo.contextTypes = {
  store: PropTypes.object.isRequired
}

export default connect(
  state => ({
      needs: state.adminPanel.needs,
      active: state.adminPanel.active
  }),
  { addTodo }
)(AddToDo)

// export default ModalNewList;