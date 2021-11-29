const initialStore = {
  search: null,
  characters: [],
  episodes: [],
  locations: {
    data: [],
    next: [],
    prev: [],
  },
  residents: [],
  loading: false,
};

function reducer(state = initialStore, action) {
  switch (action.type) {
    case "SEARCH_INPUT":
      return {
        ...state,
        search: action.payload,
      };
    case "FIRST_REQUEST_LOCATION":
    case "PREV_LOCATION":
    case "NEXT_LOCATION":
      return {
        ...state,
        locations: {
          data: action.payload.data.results,
          next: action.payload.data.info.next,
          prev: action.payload.data.info.prev,
        },
      };
    case "REQUEST_TO_RESIDENTS":
      return{
        ...state,
        residents: action.payload
      }
    default:
      return { ...state };
  }
}

export default reducer;
