import axios from 'axios'
import React from 'react'
import Card from '../card/Card'

const Hero = () => {
  axios
    .get(
      'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY'
    )
    .then(({ data }) => console.log(data))

  // const cards = [{ name: '', date: '' }]

  return (
    <section className="hero">
      <div className="container">
        <Card />
      </div>
    </section>
  )
}

export default Hero
