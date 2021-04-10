import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import Filter from '../filter/Filter'
import { useSeletor, useDispatch } from 'react-redux'

const Hero = () => {
  const [cards, setCards] = useState([])
  const [lunarDistance, SetLunarDistance] = useState(false)

  console.log(lunarDistance)

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(' http://localhost:3001/near_earth_objects').then(({ data }) => {
      const result = Object.keys(data)
        .map((key) => ({ ...data[key]}))
        .map((item) =>
          Object.keys(item).map((key) => ({ ...item[key]}))
        )
      setCards(result)
    })
  }, [])

  console.log(cards)

  return (
    <section className="hero">
      <div className="container">
        <Filter
          lunarDistance={lunarDistance}
          SetLunarDistance={SetLunarDistance}
        />
        {cards.map(
          (card) =>
            card.map((card) => (
              <Card key={card.id} {...card} lunarDistance={lunarDistance} />
            ))
          // <Card key={card.id} {...card} lunarDistance={lunarDistance} />
        )}
      </div>
    </section>
  )
}

export default Hero
