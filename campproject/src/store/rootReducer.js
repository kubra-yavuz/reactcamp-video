// tüm stateleri topladığım yer.

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({ //reducerleri birleştiriyoruz.
    cart: cartReducer 
})

export default rootReducer;