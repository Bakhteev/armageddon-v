import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterActionOn,
  filterActionOff,
} from '../../redux/actions/cards.action'
import './style.scss'

const Filter = ({ lunarDistance, setLunarDistance }) => {
  const filtered = useSelector(({ cards }) => cards.filtered)

  const [filter, setFilter] = useState(false)

  const dispatch = useDispatch()

  const handleClick = (bool) => {
    setLunarDistance(bool)
  }

  const handleChange = () => {
    if (filtered) {
      dispatch(filterActionOff())
      setFilter(false)
    } else {
      dispatch(filterActionOn())
      setFilter(true)
    }
  }

  return (
    <div className="filter row">
      <label htmlFor="checkbox1" className="flex filter__label">
        <input
          type="checkbox"
          id="checkbox1"
          checked={filter}
          onChange={handleChange}
        />
        Показать только опасные
      </label>
      <p className="filter__text">
        Расстояние{' '}
        <span
          className={`filter__change ${lunarDistance ? '' : 'active'}`}
          onClick={() => handleClick(false)}
        >
          в километрах
        </span>
        ,&nbsp;
        <span
          className={`filter__change ${lunarDistance ? 'active' : ''}`}
          onClick={() => handleClick(true)}
        >
          в дистанциях до луны
        </span>
      </p>
    </div>
  )
}

export default Filter
