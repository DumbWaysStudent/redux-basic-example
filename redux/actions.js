export function INC(){
    return {
        type: "INC",
        payload: 2
    }
}

export function ALL_MOVIES(){
    return {
        type: "ALL_MOVIES",
        payload: [
            {id: 1, title: 'beranak dalam kolam'},
            {id: 2, title: 'terbang dalam goa'},
        ]
    }
}

export function GET_MOVIE(){
    return {
        type: "GET_MOVIE",
        payload: {id: 1, title: 'beranak dalam kolam'}
    }
}