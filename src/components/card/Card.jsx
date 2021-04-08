import React from 'react'
import Asteroid from './asteroid'
import Dino from './dino'
import './style.scss'

const Card = () => {
  return (
    <div className="hero__card card row">
      <div className="col-4">
        <Asteroid width={71} height={72} />
        <Dino />
      </div>
      <div className="col-4">
        <h2 className="card__name">2021 FQ</h2>
        <ul className="card__list">
          <li className="card__item flex">
            <span>Дата</span>
            <span className="card__line-dotted"></span>
            <span>12 сентября 2021</span>
          </li>
          <li className="card__item flex">
            <span>Расстояние</span>
            <span className="card__line-dotted"></span>
            <span>7 235 024 км </span>
          </li>
          <li className="card__item flex">
            <span>Размер</span>
            <span className="card__line-dotted"></span>
            <span>85 м</span>
          </li>
        </ul>
      </div>
      <div className="card__button-block">
        <h3>Оценка:</h3>
        <h4>не опасен</h4>
        <button className="card__btn">На уничтожение</button>
      </div>
    </div>
  )
}

export default Card
