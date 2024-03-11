import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import userReducer from '../redux/reducers/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user'],
};

export const rootReducers = combineReducers({
  user: userReducer,
  // cart: 'cartReducer'
});

export default configureStore({
  reducer: rootReducers,
});
