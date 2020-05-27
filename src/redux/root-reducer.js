import { combineReducers} from 'redux';

import userReducers from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducers,
    cart: cartReducer
});