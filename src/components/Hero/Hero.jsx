/* eslint-disable indent */
import axios from 'axios'
import React, { useEffect, useState,   } from 'react'
import Card from '../card/Card'
import Filter from '../filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../../redux/actions/cards.action'
import { fetchData } from '../../utils/load'

const Hero = () => {
  const [lunarDistance, SetLunarDistance] = useState(false)

  const cards = useSelector(({ cards }) => cards)

  const dispatch = useDispatch()

  console.log(cards)

  let i = 1

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?&api_key=13pXLUuM2m0XWLNxC6IG7DSVdQpYoRAFltJnShBc&page=${i}&size=10`
      )
      console.log(data)
      console.log(i)
      dispatch(fetchCards(data.near_earth_objects))
      i++
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="hero" >
      <div className="container">
        <Filter
          lunarDistance={lunarDistance}
          SetLunarDistance={SetLunarDistance}
        />
        {cards.filtered
          ? cards.items
              .filter((item) => item.is_potentially_hazardous_asteroid === true)
              .map((card) => (
                <Card key={card.id} {...card} lunarDistance={lunarDistance} />
              ))
          : cards.items.map((card) => (
              <Card key={card.id} {...card} lunarDistance={lunarDistance} />
            ))}
      </div>
    </section>
  )
}

export default Hero
