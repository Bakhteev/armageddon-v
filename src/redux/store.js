import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Basket } from './reducers/basket.reducer'
import { Cards } from './reducers/cards.reducer'

const rootReducer = combineReducers({
  cards: Cards,
  basket: Basket,
})

export const store = createStore(rootReducer, composeWithDevTools())
