/* eslint-disable indent */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchCards, pageAction } from '../../redux/actions/cards.action'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/Card'
import Filter from '../filter/Filter'
import './style.scss'

const Hero = () => {
  const cards = useSelector(({ cards }) => cards)

  const [loading, setLoaading] = useState(false)
  const [lunarDistance, setLunarDistance] = useState(false)

  const dispatch = useDispatch()

  const fetchData = async (page) => {
    try {
      setLoaading(true)
      const { data } = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?&api_key=13pXLUuM2m0XWLNxC6IG7DSVdQpYoRAFltJnShBc&page=${page}&size=10`
      )
      dispatch(fetchCards(data.near_earth_objects))
      setLoaading(false)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  const Scroll = () => {
    let go = true
    try {
      if (
        window.scrollY - 16 ===
          document.body.clientHeight - window.innerHeight &&
        go
      ) {
        dispatch(pageAction())
        setTimeout(() => {
          go = false
        }, 1000)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(async () => {
    try {
      await fetchData(cards.page)
      window.addEventListener('scroll', Scroll)
    } catch (e) {
      console.log(e)
    }
    return () => {
      window.removeEventListener('scroll', Scroll)
      dispatch(pageAction())
    }
  }, [cards.page])

  return (
    <section className="hero" style={{ position: 'relative' }}>
      <div className="container">
        {loading ? (
          <div className="loading">
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          ''
        )}
        <Filter
          lunarDistance={lunarDistance}
          setLunarDistance={setLunarDistance}
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
