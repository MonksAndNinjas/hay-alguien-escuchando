import React from "react";
import "../css/AciContainer.css";
// sections, in order, split by click event
import Jungle from "../components/Aci/Jungle";
import Sierras from "../components/Aci/Sierras";
import Desert from "../components/Aci/Desert";
import Urban from "../components/Aci/Urban";
import Matrix from "../components/Aci/Matrix";

class AciContainer extends React.Component {
  render() {
    return (
      <div>
        <h1 className="center">Aci Page</h1>

        <Jungle />
        <Sierras />
        <Desert />
        <Urban />
        <Matrix />
      </div>
    );
  }
}

export default AciContainer;
