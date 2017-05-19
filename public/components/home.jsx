import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import Counter from './counter_component'
import Chart from './chart'
import Timer from './timer'

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/chart' component={Chart}/>
      <Route path='/counter' component={Counter}/>
      <Route path='/timer' component={Timer}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/chart'>d3 Chart</Link></li>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/timer'>Timer</Link></li>
      </ul>
    </nav>
  </header>
)

const App = () => (
  <div>
  <Header/>
  <Main/>
  </div>
)

export default App;
