const initialStore = {
  search: null,
  species: null,
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
    case "SELECT_ESPECIES":
      return{
        ...state,
        species: action.payload
      }
    default:
      return { ...state };
  }
}

export default reducer;
