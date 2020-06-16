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
    return (
      <div>
        <h1>Cochitta</h1>

        {displayArt(this.props.collectionData.artCollection) ? (
          <div>
            <p>Loading Complete</p>
            <React.Fragment>
              <ArtArchive
                category={this.props.collectionData.artCollection.digital}
                type={"digital"}
              />
              <ArtArchive
                category={this.props.collectionData.artCollection.drawings}
                type={"drawings"}
              />
              <ArtArchive
                category={this.props.collectionData.artCollection.signature}
                type={"signature"}
              />
              <ArtArchive
                category={this.props.collectionData.artCollection.paintings}
                type={"paintings"}
              />
            </React.Fragment>
          </div>
        ) : null}
      </div>
    );
  }
}
// makes photos from store accessible
const mapStateToProps = state => {
  //console.log(state.artCollection);
  return {
    collectionData: state.artCollection
  };
};

export default connect(mapStateToProps)(CochittaContainer);
