import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/sagas'


export const sagaMiddleware = createSagaMiddleware()


export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(),  sagaMiddleware],
  }, )
  sagaMiddleware.run(rootSaga)
  return store
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']