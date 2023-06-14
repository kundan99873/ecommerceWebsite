const initialState = {
    products : [],
    quantity : 0,
    total : 0
}

let newState = initialState;
const cartRedux = (state = initialState, action) => {
    if(action.type === "ADDTOCARTITEM"){
        const newProduct ={
            id : action.payload.product,
            pQuantity : action.payload.pQuantity
        }
        newState = {
            products : [...state.products, newProduct],
            quantity : state.quantity += 1,
            total : state.total + action.payload.total
        }
        return newState
        
    }
    else if(action.type === "UPDATECARTITEM"){
        newState.products.map(item => {
            if(item.id === action.payload.product){
                item.pQuantity = item.pQuantity + 1;
            }

        })
        newState = {
            products : state.products,
            quantity : state.quantity,
            total : state.total + action.payload.price
        }
        return newState
        // newState.total = state.total + action.payload.price
        // return newState;
    }
    else if(action.type === "UPDATESUBCARTITEM"){
        newState.products.map(item => {
            if(item.id === action.payload.product){
                item.pQuantity = item.pQuantity - 1;
            }

        })
        newState = {
            products : state.products,
            quantity : state.quantity,
            total : state.total - action.payload.price
        }
        return newState
    }
    else if(action.type === "REMOVEFROMCARTITEM"){
        // const index = state.products.indexOf(action.payload.product);
        // newState = {
        //     products : state.products.splice(index , 1),
        //     quantity : state.quantity -= 1,
        //     total : state.total - action.payload.total
        // }
        let updatedCart = state.products.filter(item => 
            item.id !== action.payload.product
        )
        const newState = {
            products : updatedCart,
            quantity : state.quantity - 1,
            total : state.total - action.payload.price * action.payload.pQuantity
        }
        return newState
    }
    else{
        return state;
    }
}

export default cartRedux;