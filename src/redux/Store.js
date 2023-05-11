import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import CartReducer from './Cart/CartReducer'
import customerReducer from './Customer/CustomerSlice'

// const persistConfig = {
//     key : 'root',
//     storage,
//     whitelist: ['cart']
// }

// const persistedReducer = persistReducer(persistConfig, CartReducer)

// export const store = configureStore({reducer : persistedReducer})
// export const persistor = persistStore(store)


export default configureStore({
    reducer:{
        customer : customerReducer
    }
})