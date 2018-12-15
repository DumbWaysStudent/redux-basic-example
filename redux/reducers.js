const initialState = {
    counter: 0
}

export default function reducers(state=initialState, action){
    switch (action.type){
        case "INC":
            return {...state, counter: state.counter + action.payload}       
        default:
            return state
    }
}