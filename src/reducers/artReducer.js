// handles photos data from GITHUB API for use in store
export default function artReducer(
  state = {
    loading: false,
    collection: []
  },
  action
) {
  switch (action.type) {
    case "LOADING_ART_DATA":
      return { ...state, loading: true };

    default:
      return state;
  }
}
