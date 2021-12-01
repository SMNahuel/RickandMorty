const initialStore = {
  filter: false,
  search: null,
  species: null,
  characters: [],
  gender: null,
  status: null,
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
      return {
        ...state,
        residents: action.payload,
      };
    case "SELECT_ESPECIES":
      return {
        ...state,
        species: action.payload,
      };
    case "SELECT_FILTER_GENDER":
      return {
        ...state,
        filter: true,
        gender: action.payload,
      };
    case "SELECT_FILTER_STATUS":
      return {
        ...state,
        filter: true,
        status: action.payload,
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        filter: false,
        gender: null,
        status: null
      };
    default:
      return { ...state };
  }
}

export default reducer;
