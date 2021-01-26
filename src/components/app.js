import * as React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Feed from './feed'
import Details from './details'

const App = () => (
  <Router>
    <main>
      <header>
        <h3>Swen</h3>
      </header>

      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/:stem/:index" component={Details} />
      </Switch>
    </main>
  </Router>
)

export default App
