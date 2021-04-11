/* eslint-disable indent */
import { ADD_ITEM_TO_BASKET } from '../actions/types'

const initialState = {
  items: [],
}

export const Basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    default:
      return state
  }
}
