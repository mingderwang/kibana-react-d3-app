import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/page1' component={Page1}/>
      <Route path='/page2' component={Page2}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/page1'>Page1</Link></li>
        <li><Link to='/page2'>Page2</Link></li>
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
