import React from "react";

import "../../css/Jungle.scss";

// first stars then water reflection then plantlife

class Jungle extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="stars large" />
        <div className="stars medium" />
        <div className="stars small" />
      </div>
    );
  }
}

export default Jungle;
