import React from "react";
import "../css/CochittaContainer.css";
// connects to store and allows use of functiuons in /actions
import { connect } from "react-redux";
// allows use of helper function
import { displayArt } from "../helpers/displayArt";

// Upload and render artwork

class CochittaContainer extends React.Component {
  render() {
    let digital = this.props.artCollection.artCollection.digital;
    let drawings = this.props.artCollection.artCollection.drawings;
    let signature = this.props.artCollection.artCollection.signature;
    let paintings = this.props.artCollection.artCollection.paintings;

    return (
      <div>
        <h1>Cochitta</h1>

        {displayArt(this.props.artCollection) ? <div>yes</div> : null}
      </div>
    );
  }
}
// makes photos from store accessible
const mapStateToProps = state => {
  return {
    artCollection: state.artCollection
  };
};

export default connect(mapStateToProps)(CochittaContainer);
