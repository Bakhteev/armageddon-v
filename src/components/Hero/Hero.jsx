/* eslint-disable indent */
import axios from 'axios'
import React, { useEffect, useState, Component } from 'react'
import Card from '../card/Card'
import Filter from '../filter/Filter'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchCards, pageAction } from '../../redux/actions/cards.action'
import { fetchData } from '../../utils/load'
// import { mapStateToProps } from '../../redux/selectors/cards.selector'
import { mapDispatchToProps } from '../../redux/actions/cards.action'

// let i = 1

// const Hero = () => {
//   const [lunarDistance, SetLunarDistance] = useState(false)

//   const cards = useSelector(({ cards }) => cards)

//   const dispatch = useDispatch()

//   console.log(cards)

//   const fetchData = async (page) => {
//     try {
//       const { data } = await axios.get(
//         `https://api.nasa.gov/neo/rest/v1/neo/browse?&api_key=13pXLUuM2m0XWLNxC6IG7DSVdQpYoRAFltJnShBc&page=${page}&size=10`
//       )
//       dispatch(fetchCards(data.near_earth_objects))
//       console.log(page)
//       console.log(data)
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   const ScrollLoad = (page) => {
//     if (window.scrollY > document.body.clientHeight - window.innerHeight) {
//       fetchData(page)
//       dispatch(pageAction())
//     }
//   }
//   useEffect(() => {
//     window.removeEventListener('scroll', ()=>ScrollLoad(cards.page))
//     fetchData(cards.page)
//     dispatch(pageAction())
//     window.addEventListener('scroll', () => ScrollLoad(cards.page))
//   }, [])

//   return (
//     <section className="hero">
//       <div className="container">
//         <Filter
//           lunarDistance={lunarDistance}
//           SetLunarDistance={SetLunarDistance}
//         />
//         {cards.filtered
//           ? cards.items
//               .filter((item) => item.is_potentially_hazardous_asteroid === true)
//               .map((card) => (
//                 <Card key={card.id} {...card} lunarDistance={lunarDistance} />
//               ))
//           : cards.items.map((card) => (
//               <Card key={card.id} {...card} lunarDistance={lunarDistance} />
//             ))}
//       </div>
//     </section>
//   )
// }

// export default Hero

function mapStateToProps(state) {
  const { cards } = state
  return { cards }
}

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = { lunarDistance: false, filter: false }
  }

  componentDidMount() {
    console.log(this.props.cards.page, 'didMount')
    this.fetchData(this.props.cards.page)
    document.addEventListener(
      'scroll',
      () => {
        if (
          window.scrollY ===
          document.body.clientHeight - window.innerHeight
        ) {
          this.fetchData(this.props.cards.page)
          // this.props.pageAction()
        }
      },
      false
    )
    // this.props.pageAction()
    console.log('listener add')
  }

  scroll() {
    // debugger
    if (window.scrollY === document.body.clientHeight - window.innerHeight) {
      // this.props.pageAction()
      this.fetchData(this.props.cards.page)
    }
  }

  componentWillUnmount() {
    console.log(this.props.cards.page, 'willUnmount')
    document.removeEventListener('scroll', this.scroll.bind(this), false)
    // this.props.pageAction()
    console.log('listener delete')
  }

  async fetchData(page) {
    try {
      const { data } = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?&api_key=13pXLUuM2m0XWLNxC6IG7DSVdQpYoRAFltJnShBc&page=${page}&size=10`
      )
      console.log(data)
      console.log(page, 'fechdata')
      this.props.fetchCards(data.near_earth_objects)
      this.props.pageAction()
      console.log(page, 'changed')
    } catch (e) {
      console.log(e)
    }
  }

  handleSetState(bool) {
    this.setState((state) => ({
      ...state,
      lunarDistance: bool,
    }))
  }

  handleChange() {
    if (this.state.filter) {
      this.setState((state) => ({ ...state, filter: false }))
      this.props.filterActionOff()
    } else {
      this.setState((state) => ({ ...state, filter: true }))
      this.props.filterActionOn()
    }
  }

  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="filter row">
            <label htmlFor="checkbox1" className="flex filter__label">
              <input
                type="checkbox"
                id="checkbox1"
                checked={this.state.filter}
                onChange={this.handleChange.bind(this)}
              />
              Показать только опасные
            </label>
            <p className="filter__text">
              Расстояние{' '}
              <span
                className={`filter__change ${
                  this.state.lunarDistance ? '' : 'active'
                }`}
                onClick={() => this.handleSetState(false)}
              >
                в километрах
              </span>
              ,&nbsp;
              <span
                className={`filter__change ${
                  this.state.lunarDistance ? 'active' : ''
                }`}
                onClick={() => this.handleSetState(true)}
              >
                в дистанциях до луны
              </span>
            </p>
          </div>
          {this.props.cards.filtered
            ? this.props.cards.items
                .filter(
                  (item) => item.is_potentially_hazardous_asteroid === true
                )
                .map((card) => (
                  <Card
                    key={card.id}
                    {...card}
                    lunarDistance={this.state.lunarDistance}
                  />
                ))
            : this.props.cards.items.map((card) => (
                <Card
                  key={card.id}
                  {...card}
                  lunarDistance={this.state.lunarDistance}
                />
              ))}
          card
        </div>
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)
