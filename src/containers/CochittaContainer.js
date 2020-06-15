import React from "react";
import "../css/CochittaContainer.css";
//connects to store and allows use of functions in /actions
import { connect } from "react-redux";

// Upload and render artwork

class CochittaContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Cochitta</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CochittaContainer);
