
import {connectRoutes} from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

import {ROUTE_HOME} from 'types'

const routesMap = {
  [ROUTE_HOME]: '/'
}

const history = createHistory()

const {
  reducer,
  middleware,
  enhancer
} = connectRoutes(history, routesMap)

// @HACK Exporting when assigning the variables above works when the application compiles to run,
// however Jest chokes on the reducer when running our snapshot tests.
export {
  reducer,
  middleware,
  enhancer
}
