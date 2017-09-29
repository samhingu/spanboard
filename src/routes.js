import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store'

import App from './containers/App'
import Home from './containers/Home'
import ListPage from './containers/ListPage'
import TreePage from './containers/Tree'
import Tag from './containers/Tag'

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/tag" component={Tag} />
      <Route exact path="/tree" component={TreePage} />
      <Route exact path="/list" component={ListPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={App} />
    </Switch>
  </ConnectedRouter>
)
export default routes
