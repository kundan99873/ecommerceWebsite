import { createStore } from "redux";
import bootReducers from "./reducers/index";
// import cartRedux from "./reducers/cartRedux";

const store = createStore(bootReducers)

export default store;