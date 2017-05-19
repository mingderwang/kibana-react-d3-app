import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, NavLink } from 'react-router-dom'
import Counter from './counter_mapping'
import Chart from './chart'
import Timer from './timer'

const Home = () => (
  <div>
    <h1>歡迎選用 BitMap 效能評估與日誌分析工具包!</h1>
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
      <ul className="header">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/chart'>d3 Chart</NavLink></li>
        <li><NavLink to='/counter'>Counter</NavLink></li>
        <li><NavLink to='/timer'>Timer</NavLink></li>
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
