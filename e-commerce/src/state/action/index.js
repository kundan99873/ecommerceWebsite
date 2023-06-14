export const addToCart = (product,pQuantity, total) => {
    return({
        type : "ADDTOCARTITEM",
        payload : {
            product,
            pQuantity,
            total
        }
    })
}
export const updateCart = (product, price) => {
    return({
        type : "UPDATECARTITEM",
        payload : {
            product,
            price
        }
    })
}
export const updateSubCart = (product, price) => {
    return({
        type : "UPDATESUBCARTITEM",
        payload : {
            product,
            price
        }
    })
}
export const removeFromCart = (product, price, pQuantity) => {
    return({
        type : "REMOVEFROMCARTITEM",
        payload : 
        {
            product,
            price,
            pQuantity
        }
    })
}

// export const updateCart = (quantity) => {
//     return({
//         type : "UPDATEADDCART",
//         payload : {
//             quantity
//         }
//     })
// }

export const orderProduct = (cart, info) => {
    return({
        type : "ORDEREDPRODUCT",
        payload : {
            cart,
            info
        }
    })
}