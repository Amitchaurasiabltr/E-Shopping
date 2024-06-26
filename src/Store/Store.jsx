import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"

import RootReducer from "./Reducers/RootReduser"
import RootSaga from "./Sagas/RootSaga"

const sagaMiddleware = createSagaMiddleware()
const Store = configureStore({
    reducer:RootReducer,
    middleware:()=>[sagaMiddleware]
})
export default Store

sagaMiddleware.run(RootSaga)