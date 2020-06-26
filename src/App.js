import React from "react";
// connects to store and allows use of functions in /actions
import { connect } from "react-redux";
import { fetchArt } from "./actions/fetch";
import "./css/styles.css";

class App extends React.Component {
  render() {
    return <></>;
  }
  // fetch data from API's
  componentDidMount() {
    this.props.fetchArt();
  }
}

const mapStateToProps = state => {
  return {
    artCollection: state.artCollection
  };
};

export default connect(
  mapStateToProps,
  { fetchArt }
)(App);
