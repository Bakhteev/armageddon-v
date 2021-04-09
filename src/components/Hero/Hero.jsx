import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../card/Card'

const Hero = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/near_earth_objects')
      .then(({ data }) => setCards(data))
  }, [])


  console.log(cards)

  return (
    <section className="hero">
      <div className="container">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Hero
