// handles photos data from GITHUB API for use in store
export default function artReducer(
  state = {
    loading: false,
    collectionLoading: false,
    artCollection: {
      drawings: [],
      digital: [],
      signature: [],
      paintings: []
    }
  },
  action
) {
  switch (action.type) {
    case "LOADING_ART_DATA":
      return { ...state, loading: true };

    case "LOADING_COLLECTION":
      return { ...state, collectionLoading: true };

    case "FETCH_ART_DATA":
      console.log(state);
      return { loading: false, artCollection: state.artCollection };

    case "FETCH_COLLECTION":
      state.artCollection[`${action.name}`] = action.payload;

      return {
        collectionLoading: false,
        artCollection: state.artCollection,
        name: action.name
      };

    default:
      return state;
  }
}
