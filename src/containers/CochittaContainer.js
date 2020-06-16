import React from "react";
// import art components
import ArtArchive from "../components/Cochitta/ArtArchive";
// connects to store and allows use of functiuons in /actions
import { connect } from "react-redux";
// allows use of helper function
import { displayArt } from "../helpers/displayArt";
// styling
import "../css/CochittaContainer.css";
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

        {displayArt(this.props.artCollection.artCollection) ? (
          <div>
            <p>yes</p>
            <ArtArchive />
          </div>
        ) : null}
      </div>
    );
  }
}
// makes photos from store accessible
const mapStateToProps = state => {
  console.log(state.artCollection);
  return {
    artCollection: state.artCollection
  };
};

export default connect(mapStateToProps)(CochittaContainer);
