const initialStore = {
  search: null,
  characters: [],
  episodes: [],
  locations: {
    data: [],
    next: [],
    prev: []
  },
  loading: false,
};

function reducer(state = initialStore, action) {
  switch (action.type) {
    case "SEARCH_INPUT":
      return {
        ...state,
        search: action.payload,
      };
    case "NEXT_LOCATION":
      return{
        ...state,
        locations:{
          data: action.payload.data.results,
          next: action.payload.data.info.next,
          prev: action.payload.data.info.prev,
        }
      }
    case "PREV_LOCATION":
    default:
      return { ...state };
  }
}

export default reducer;