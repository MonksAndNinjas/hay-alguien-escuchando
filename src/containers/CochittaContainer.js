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

        {displayArt(this.props.artCollection.artCollection) ? (
          <div>
            <p>yes</p>
            <React.Fragment>
              <ArtArchive
                category={this.props.artCollection.artCollection.digital}
                type={"digital"}
              />
              <ArtArchive
                category={this.props.artCollection.artCollection.drawings}
                type={"drawings"}
              />
              <ArtArchive
                category={this.props.artCollection.artCollection.signature}
                type={"signature"}
              />
              <ArtArchive
                category={this.props.artCollection.artCollection.paintings}
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
    artCollection: state.artCollection
  };
};

export default connect(mapStateToProps)(CochittaContainer);
