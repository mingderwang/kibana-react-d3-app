import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, NavLink } from 'react-router-dom'
import Counter from './counter_mapping'
import Chart from './chart'
import Timer from './timer'
import SimpleTable from './simpletable'
import SimpleMap from './simplemap'


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
      <Route path='/simpletable' component={SimpleTable}/>
      <Route path='/simplemap' component={SimpleMap}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul className="header">
        <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
        <li><NavLink to='/chart' activeClassName="active">d3 Chart</NavLink></li>
        <li><NavLink to='/counter' activeClassName="active">Counter</NavLink></li>
        <li><NavLink to='/simpletable' activeClassName="active">Simple Table</NavLink></li>
        <li><NavLink to='/simplemap' activeClassName="active">Simple Map</NavLink></li>
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
