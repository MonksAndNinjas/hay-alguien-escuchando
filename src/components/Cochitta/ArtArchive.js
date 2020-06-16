import React from "react";

class ArtArchive extends React.Component {
  render() {
    const renderCategory = this.props.category.map((art, index) => (
      <div key={index}>
        <img
          id={index}
          value={`${this.props.type}-${index}`}
          src={art.download_url}
          alt={art.name}
        />
      </div>
    ));

    return (
      <>
        <p>{this.props.type}</p>
        {renderCategory}
      </>
    );
  }
}

export default ArtArchive;
