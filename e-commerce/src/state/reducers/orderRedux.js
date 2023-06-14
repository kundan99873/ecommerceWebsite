const initialState = {
    products : [],
    user : []
}

const orderRedux = (state = initialState, action) => {
    if(action.type === "ORDEREDPRODUCT"){
        const newState = {
            products : [...state.products, action.payload.cart],
            user : [...state.user, action.payload.info]
        }
        return newState
    }
    else{
        return state;
    }
}

export default orderRedux;