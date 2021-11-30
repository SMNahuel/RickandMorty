export const SearchInput = (text) => {
    return {
        type: "SEARCH_INPUT",
        payload: text,
    }
}

export const FIRST_REQUEST_LOCATION = (locations) => {
    return{
        type: "FIRST_REQUEST_LOCATION",
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

export const REQUEST_TO_RESIDENTS = (residents) => {
    return{
        type: "REQUEST_TO_RESIDENTS",
        payload: residents
    }
}

export const SELECT_ESPECIES = (species) => {
    return{
        type: "SELECT_ESPECIES",
        payload: species
    }
}