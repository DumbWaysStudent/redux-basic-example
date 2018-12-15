const initialState = {
    movies: [],
    isLoading: false,
    isError: false,
    movie: {}    
}

export default function reducers(state=initialState, action){
    switch (action.type){        
        case "ALL_MOVIES_PENDING":
            return {...state, isLoading: true}       
        case "ALL_MOVIES_FULFILLED":
            return {...state, isLoading: false, movies: action.payload.data}       
        case "ALL_MOVIES_REJECTED":
            return {...state, isLoading: false, isError: true}       
        case "GET_MOVIE":
            return {...state, movie: action.payload}       
        default:
            return state
    }
}