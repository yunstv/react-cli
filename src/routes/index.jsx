import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
const Router = process.env.ENV_NAME !== 'develop' ? BrowserRouter : BrowserRouter

import ViewIndex from 'src/views/index'
import ViewGoodsDetails from 'src/views/goods_details'

const Routes = () => {
  return (
    <Router basename={''}>
      <Switch>
        <Route exact path="/" component={ViewIndex} />
        <Route exact path="/goods" component={ViewGoodsDetails} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  )
}

export default Routes