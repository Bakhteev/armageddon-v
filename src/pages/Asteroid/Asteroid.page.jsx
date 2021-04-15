import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { pageAction } from '../../redux/actions/cards.action'
import './style.scss'
import { FormatDate } from '../../utils/formatDate'

const AsteroidPage = () => {
  const [asteroid, setAsteroid] = useState({})
  const { id } = useParams()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  dispatch(pageAction())

  console.log(id)

  useEffect(async () => {
    setLoading(true)
    const { data } = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=13pXLUuM2m0XWLNxC6IG7DSVdQpYoRAFltJnShBc`
    )
    setLoading(false)
    console.log(data)
    setAsteroid(data)
  }, [])

  if (loading || !asteroid) {
    return (
      <div className="asteroid__loading">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }

  const {
    estimated_diameter = {},
    is_potentially_hazardous_asteroid,
    close_approach_data = [],
  } = asteroid

  const {
    epoch_date_close_approach = Date.now(),
    close_approach_date = '',
    miss_distance = 0,
  } = close_approach_data[close_approach_data.length - 1] || [0]

  const { lunar } = miss_distance

  const { kilometers = {} } = estimated_diameter
  const { estimated_diameter_max, estimated_diameter_min } = kilometers
  console.log(estimated_diameter_max)
  return (
    <section className="asteroid">
      <div className="container">
        <h2 className="asteroid__name">{asteroid.name}</h2>
        <div className="row" >
          <div className="asteroid__item">
            <h3 className="asteroid__title">Основная информация</h3>
            <ul className="asteroid__list">
              <li>
                Средний размер:{' '}
                {Math.round(
                  (estimated_diameter_max + estimated_diameter_min) / 2
                )}{' '}
                км
              </li>
              <li>
                Оценка опасности:{' '}
                {is_potentially_hazardous_asteroid ? 'опасный' : 'не опасный'}
              </li>
              <li>
                Ближайшее расстояние к Земле:{' '}
                {Math.round(miss_distance.kilometers)} км, {Math.round(lunar)}{' '}
                лун(а, ы)
              </li>
              <li>
                Дата максимального подлёта:{' '}
                {FormatDate(epoch_date_close_approach, close_approach_date)}{' '}
              </li>
            </ul>
          </div>
          <div className="asteroid__item">
            <h3 className="asteroid__title">Сближения</h3>
            {close_approach_data.map(
              ({
                miss_distance,
                close_approach_date_full,
                relative_velocity,
                orbiting_body,
                epoch_date_close_approach,
                close_approach_date,
              }) => (
                <ul className="asteroid__list">
                  <li className="flex">
                    Cкорость относительно Земли:{' '}
                    <div
                      className="flex"
                      style={{ flexDirection: 'column', marginLeft: 10 }}
                    >
                      <span>
                        {Math.round(relative_velocity.kilometers_per_hour)} км/ч
                      </span>
                      <span>
                        {Math.round(relative_velocity.kilometers_per_second)}{' '}
                        км/c
                      </span>
                      <span>
                        {Math.round(relative_velocity.miles_per_hour)} миль/ч
                      </span>
                    </div>
                  </li>
                  <li>
                    Время максимального сближения с Землей:{' '}
                    {FormatDate(epoch_date_close_approach, close_approach_date)}{' '}
                    {
                      close_approach_date_full.split(' ')[
                        close_approach_date_full.split(' ').length - 1
                      ]
                    }
                  </li>
                  <li className="flex">
                    Расстояние до Земли:{' '}
                    <div
                      className="flex"
                      style={{ flexDirection: 'column', marginLeft: 10 }}
                    >
                      <span>{miss_distance.astronomical} астрономическое</span>
                      <span>{Math.round(miss_distance.kilometers)} км</span>
                      <span>{Math.round(miss_distance.lunar)} лун</span>
                      <span>{Math.round(miss_distance.miles)} миль</span>
                    </div>
                  </li>
                  <li>Орбита полета: {orbiting_body}</li>
                </ul>
              )
            )}
          </div>
        </div>
        <button>На уничтожение</button>
      </div>
    </section>
  )
}

export default AsteroidPage
