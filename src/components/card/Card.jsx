import React from 'react'
import Asteroid from './asteroid'
import Dino from './dino'
import './style.scss'

const Card = ({ name, estimated_diameter, close_approach_data }) => {
  const { meters } = estimated_diameter
  const { estimated_diameter_min, estimated_diameter_max } = meters
  const min = estimated_diameter_min
  const max = estimated_diameter_max

  const { miss_distance, close_approach_date } = close_approach_data[
    close_approach_data.length - 1
  ]
  const { kilometers, lunar } = miss_distance

  console.log(lunar)

  console.log(new Date().getMonth())

  const date = () => {
    const Month = [
      'Января',
      'Февраля',
      'Марта ',
      'Апреля ',
      'Мая ',
      'Июня',
      'Июля ',
      'Августа ',
      'Сентября ',
      'Октября ',
      'Ноября',
      'Декабря',
    ]
    close_approach_date
      .split('-')
      .reverse()
      // .map((item, index) => Number(item))
  }

  return (
    <div className="hero__card card row">
      <div className="col-4">
        <Asteroid width={71} height={72} />
        <Dino />
      </div>
      <div className="col-4">
        <h2 className="card__name">{name}</h2>
        <ul className="card__list">
          <li className="card__item flex">
            <span>Дата</span>
            <span className="card__line-dotted"></span>
            <span>12 сентября 2021</span>
          </li>
          <li className="card__item flex">
            <span>Расстояние</span>
            <span className="card__line-dotted"></span>
            <span>{Math.round(kilometers)} км </span>
          </li>
          <li className="card__item flex">
            <span>Размер</span>
            <span className="card__line-dotted"></span>
            <span>{Math.round((min + max) / 2)} м</span>
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
