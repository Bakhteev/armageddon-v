import React, { useState } from 'react'
import './style.scss'

const Filter = () => {
  const [active, setActive] = useState(true)

  return (
    <div className="filter row">
      <label htmlFor="checkbox1" className="flex filter__label">
        <input type="checkbox" id="checkbox1" />
        Показать только опасные
      </label>
      <p className="filter__text">
        Расстояние{' '}
        <span
          className={`filter__change ${active ? 'active' : ''}`}
          onClick={() => setActive(true)}
        >
          в километрах
        </span>
        ,&nbsp;
        <span
          className={`filter__change ${active ? '' : 'active'}`}
          onClick={() => setActive(false)}
        >
          в дистанциях до луны
        </span>
      </p>
    </div>
  )
}

export default Filter
