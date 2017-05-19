import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import { connect } from 'react-redux'

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
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const App = () => (
  <div>
  <h1>hello</h1>
  </div>
)

export default App;
