/* eslint-disable indent */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import Filter from '../filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../../redux/actions/cards.action'
import { fetchData } from '../../utils/load'

let i = 1

const Hero = () => {
  const [lunarDistance, SetLunarDistance] = useState(false)

  const cards = useSelector(({ cards }) => cards)

  const dispatch = useDispatch()

  console.log(cards)

  const fetchData = async (i) => {
    try {
      const { data } = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?&api_key=13pXLUuM2m0XWLNxC6IG7DSVdQpYoRAFltJnShBc&page=${i}&size=10`
      )
      dispatch(fetchCards(data.near_earth_objects))
      console.log(i)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  

  const ScrollLoad = (i) => {
    fetchData(i)
    document.addEventListener('scroll', () => {
      if (window.scrollY > document.body.clientHeight - window.innerHeight) {
        fetchData(i)
        return (i += 1)
      }
    })
    i += 1
  }
  // ScrollLoad(i)

  useEffect(() => {
    ScrollLoad(i)

    i += 1
  }, [])

  return (
    <section className="hero">
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
