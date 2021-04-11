import { FILTER_BY_DANGER_ON, FILTER_BY_DANGER_OFF, FETCH_CARDS } from './types'

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
