import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';

class NeedsList extends Component {

  constructor(props) {
    super(props);
    console.log("PROPS:", this.props);

    this.state = {
      needs: this.props.needs
    }

  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.props.needs.map((need, index) => 
            <tr className="ellist" key={index}>
                <td>{index + 1}</td>
                <td>{need.task}</td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(
  state => ({needs: state.adminPanel.needs})
  )(NeedsList)

