const initialState = {
    movies: [],
    movie: {}    
}

export default function reducers(state=initialState, action){
    switch (action.type){        
        case "ALL_MOVIES":
            return {...state, movies: action.payload}       
        case "GET_MOVIE":
            return {...state, movie: action.payload}       
        default:
            return state
    }
}