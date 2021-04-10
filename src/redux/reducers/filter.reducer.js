import { FILTER_BY_DANGER } from '../actions/types'

const initialState = {
  items: [],
}

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_DANGER:
      return {
        ...state,
        items: items.filter((item) => item === 1),
      }
    default:
      return state
  }
}
