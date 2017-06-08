import React, { Component } from 'react';
import NeedsList from './NeedsList';
import AddToDo from './AddToDo';
import {Grid, Row, Col} from 'react-flexbox-grid';

class FilterLinks extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            filter: 'SHOW_ALL'
        }
    }

    onClick(text) {
        this.setState({filter: text});
    }

    render() {
            return (
                <Col lg={5} className="list-needs">
                        <AddToDo />
                        <div> SHOW: <a href="#" onClick={this.onClick.bind(this, 'SHOW_ALL')}> All </a>
                                    <a href="#" onClick={this.onClick.bind(this, 'SHOW_COMPLETED')}> Completed </a>
                                    <a href="#" onClick={this.onClick.bind(this, 'SHOW_ACTIVE')}> Active </a>
                        </div>
                        <NeedsList filter = {this.state.filter} />
                </Col>


            )
    }

}

export default FilterLinks;