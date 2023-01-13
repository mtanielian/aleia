import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import MenuOptionsReducer from '@/reducers/MenuOptionsReducer'

const reducers = combineReducers({
  menuOptions: MenuOptionsReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  ) 
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
