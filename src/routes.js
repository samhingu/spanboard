import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store'

import App from './containers/App'
import Home from './containers/Home'

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={App} />
    </Switch>
  </ConnectedRouter>
)
export default routes
