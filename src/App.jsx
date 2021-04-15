import React from 'react'
import Header from './components/header/header'
import HomePage from './pages/Index'
import BasketPage from './pages/Basket.page'
import AsteroidPage from './pages/Asteroid/Asteroid.page'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/basket" component={BasketPage} />
      <Route exact path="/asteroid/:id" component={AsteroidPage}/>
      <Redirect to="/" />
    </Switch>
  </Router>
)
export default App
