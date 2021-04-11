import { ADD_ITEM_TO_BASKET } from './types'

export const addItemToBasket = (payload) => ({
  type: ADD_ITEM_TO_BASKET,
  payload,
})
