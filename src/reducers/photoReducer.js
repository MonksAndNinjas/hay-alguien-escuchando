// handles photos data from GITHUB API for use in store
export default function photoReducer(
  state = {
    loading: false,
    photos: []
  },
  action
) {
  switch (action.type) {
    case "LOADING_PHOTOS_DATA":
      return { ...state, loading: true };

    default:
      return state;
  }
}
