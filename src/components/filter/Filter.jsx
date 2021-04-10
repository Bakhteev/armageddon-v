import React, { useState } from 'react'
import './style.scss'

const Filter = ({ lunarDistance, SetLunarDistance }) => {
  const [active, setActive] = useState(false)

  const handleClick = (bool) => {
    SetLunarDistance(bool)
    setActive(bool)
  }

  return (
    <div className="filter row">
      <label htmlFor="checkbox1" className="flex filter__label">
        <input type="checkbox" id="checkbox1" />
        Показать только опасные
      </label>
      <p className="filter__text">
        Расстояние{' '}
        <span
          className={`filter__change ${active ? '' : 'active'}`}
          onClick={() => handleClick(false)}
        >
          в километрах
        </span>
        ,&nbsp;
        <span
          className={`filter__change ${active ? 'active' : ''}`}
          onClick={() => handleClick(true)}
        >
          в дистанциях до луны
        </span>
      </p>
    </div>
  )
}

export default Filter
