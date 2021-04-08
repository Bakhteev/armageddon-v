import React from 'react'
import './style.scss'
import Filter from '../filter/Filter'

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__row row">
        <div className="header__text">
          <h1 className="header__title">ARMAGGEDON V</h1>
          <p className="header__description">
            Сервис мониторинга и уничтожения астероидов, опасно подлетающих
            к Земле.
          </p>
        </div>
        <nav className="header__nav">
          <ul className="header__list flex">
            <li className="header__item">
              <a href="#" className="header__link">
                Астероиды
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Уничтожение
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Filter />
    </div>
  </header>
)

export default Header
