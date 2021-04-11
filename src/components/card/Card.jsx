import React from 'react'
import Asteroid from './asteroid'
import Dino from './dino'
import './style.scss'
import { FormatDate } from '../../utils/formatDate'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToBasket } from '../../redux/actions/basket.action'

const Card = ({
  id,
  name,
  estimated_diameter = {},
  close_approach_data,
  lunarDistance,
  is_potentially_hazardous_asteroid,
  basket
}) => {
  const { meters = {} } = estimated_diameter
  const { estimated_diameter_min, estimated_diameter_max } = meters
  const min = estimated_diameter_min
  const max = estimated_diameter_max

  const {
    miss_distance,
    close_approach_date,
    epoch_date_close_approach,
  } = close_approach_data[close_approach_data.length - 1]
  const { kilometers, lunar } = miss_distance

  const dispatch = useDispatch()
  const cards = useSelector(({ cards }) => cards)

  const handleAddItemToBasket = (id) => {
    const item = cards.items.find((item) => item.id === id)
    dispatch(addItemToBasket(item))
  }

  return (
    <div
      className={`hero__card card ${
        is_potentially_hazardous_asteroid ? 'card--danger' : 'card--safe'
      } row`}
    >
      <div className="col-4">
        <Asteroid
          width={Math.round((min + max) / 2) / 56}
          height={Math.round((min + max) / 2) / 56}
        />
        <Dino />
      </div>
      <div className="col-4 card__text-block">
        <h2 className="card__name">{name}</h2>
        <ul className="card__list">
          <li className="card__item flex">
            <span>Дата</span>
            <span className="card__line-dotted"></span>
            <span>
              {FormatDate(epoch_date_close_approach, close_approach_date)}
            </span>
          </li>
          <li className="card__item flex">
            <span>Расстояние</span>
            <span className="card__line-dotted"></span>
            <span>
              {lunarDistance
                ? `${Math.round(lunar)}`
                : `${Math.round(kilometers)} км`}
            </span>
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
        <button className="card__btn" onClick={() => handleAddItemToBasket(id)}>
          На уничтожение
        </button>
      </div>
    </div>
  )
}

export default Card
