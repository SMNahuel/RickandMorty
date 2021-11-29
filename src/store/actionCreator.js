export const SearchInput = (text) => {
    return {
        type: "SEARCH_INPUT",
        payload: text,
    }
}

export const REQUEST_LOCATION = (locations) => {
    return{
        type: "REQUEST_LOCATION",
        payload: locations
    }
}

export const NEXT_LOCATION = (locations) => {
    return{
        type: "NEXT_LOCATION",
        payload: locations
    }
}

export const PREV_LOCATION = (locations) => {
    return{
        type: "PREV_LOCATION",
        payload: locations
    }
}