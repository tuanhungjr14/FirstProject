import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from '../redux/reducers/userSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
});
//tao 1 reducer moi co kha nang luu tru du lieu dua trên cau hinh dc cung cap
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      //tat serializable check vi trang thai redux co the chua gtri k tuan theo ngtac  "plan js obj"dc yc mac dinh boi rtk
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
