import {
  FILTER_BY_DANGER_ON,
  FILTER_BY_DANGER_OFF,
  FETCH_CARDS,
  NEW_PAGE,
} from './types'

export const filterActionOn = () => ({
  type: FILTER_BY_DANGER_ON,
})

export const filterActionOff = () => ({
  type: FILTER_BY_DANGER_OFF,
})

export const fetchCards = (payload) => ({
  type: FETCH_CARDS,
  payload,
})

export const pageAction = () => ({
  type: NEW_PAGE,
})

export const mapDispatchToProps = (dispatch) => ({
  filterActionOn: () => dispatch(filterActionOn()),
  filterActionOff: () => dispatch(filterActionOff()),
  fetchCards: (payload) => dispatch(fetchCards(payload)),
  pageAction: () => dispatch(pageAction()),
})
