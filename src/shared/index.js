import React, { useEffect } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import routes from './routes'
import { initGa, trackingPageGa } from 'shared/utils/reactGa'

const App = () => {
  useEffect(() => {
    initGa()
    trackingPageGa(window.location.pathname)
  })
  return (
    <Switch>
      {routes.map(({ path, component, isExact }, index) => (
        <Route
          path={path}
          component={component}
          exact={isExact}
          key={index}
        />
      ))}
    </Switch>
  )
}

export default App
