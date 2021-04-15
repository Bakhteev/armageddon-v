import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/card/Card'
import { pageAction } from '../redux/actions/cards.action'

const BasketPage = () => {
  const dispatch = useDispatch()

  const basketItems = useSelector(({ basket }) => basket.items)

  useEffect(() => {
    dispatch(pageAction())
  }, [])

  if (basketItems.length === 0) {
    return (
      <section className="basket">
        <div className="container">
          <h2> корзина пуста </h2>
        </div>
      </section>
    )
  }

  return (
    <section className="basket">
      <div className="container">
        {basketItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default BasketPage
