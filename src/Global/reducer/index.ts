export function cartReducer (state : any , action : any) {
    if(action.payload === "addToCart"){
        return {
            cart : [...state.cart, action.data]
        }
    }else if (action.payload === "removeToCart"){
        return " "
    }else if(action.payload === "updateToCart"){
        return state
}
    return state
}