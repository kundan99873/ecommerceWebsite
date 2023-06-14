import {combineReducers} from "redux"
import cartRedux from "./cartRedux"
import orderRedux from "./orderRedux";

const bootReducers = combineReducers({
    cartItem : cartRedux,
    order : orderRedux
})

export default bootReducers;