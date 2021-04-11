import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__row row">
        <div className="header__text">
          <h1 className="header__title">ARMAGGEDON V</h1>
          <p className="header__description">
            Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
            Земле.
          </p>
        </div>
        <nav className="header__nav">
          <ul className="header__list flex">
            <li className="header__item">
              <NavLink exact to="/" active={'active'} className="header__link">
                Астероиды
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                exact
                to="/basket"
                active={'active'}
                className="header__link"
              >
                Уничтожение
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
