import React from 'react'
import Header from './components/header/header'
import HomePage from './pages/Index'
import BasketPage from './pages/Basket'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/basket" component={BasketPage}/>
      <Redirect to="/" />
    </Switch>
  </Router>
)
export default App
