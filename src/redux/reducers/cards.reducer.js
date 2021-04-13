/* eslint-disable indent */
import {
  FILTER_BY_DANGER_ON,
  FILTER_BY_DANGER_OFF,
  FETCH_CARDS,
  NEW_PAGE,
} from '../actions/types'

const initialState = {
  items: [],
  page: 0,
  filtered: false,
}

export const Cards = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return {
        ...state,
        filtered: false,
        items: [...state.items, ...action.payload],
      }
    case FILTER_BY_DANGER_ON:
      return {
        ...state,
        filtered: true,
      }
    case FILTER_BY_DANGER_OFF:
      return {
        ...state,
        filtered: false,
      }
    case NEW_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    default:
      return state
  }
}
