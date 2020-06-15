// fetches artwork from GITHUB

export function fetchArt() {
  return dispatch => {
    dispatch({ type: "LOADING_ART_DATA" });
    // fetches all photos within directory
    return fetch(
      "https://api.github.com/repos/MonksAndNinjas/MonksAndNinjas.github.io/contents/img",
      {
        accept: "application/json"
      }
    )
      .then(response => response.json())
      .then(data => {
        let artPromises = data.map(collection => {
          dispatch({ type: "LOADING_COLLECTION" });
          // makes individual calls to retrieve data for photo
          return fetch(
            "https://api.github.com/repos/MonksAndNinjas/MonksAndNinjas.github.io/contents/img/" +
              collection.name,
            {
              accept: "application/json"
            }
          )
            .then(response => response.json())
            .then(art =>
              dispatch({
                type: "FETCH_COLLECTION",
                name: collection.name,
                payload: art
              })
            );
        });
        // makes sure all promises have been complete before continuing
        return Promise.all(artPromises);
      })
      .then(collection =>
        dispatch({ type: "FETCH_ART_DATA", payload: collection })
      );
  };
}
