// is art ready to be displayed?
export const displayArt = artCollection => {
  return (
    artCollection.drawings.length > 0 &&
    artCollection.digital.length > 0 &&
    artCollection.signature.length > 0 &&
    artCollection.paintings.length > 0
  );
};
