import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Components/Home/Home'
import Survey from './Components/Survey/Survey'
import Results from './Components/Results/Results'

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/survey' component={ Survey } />
    <Route path='/results' component={ Results } />
  </Switch>
)