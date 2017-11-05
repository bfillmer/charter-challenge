
import {createAction} from 'redux-actions'

import * as types from 'types'

// ROUTING
export const routeHome = createAction(types.ROUTE_HOME)

// MESSAGES
export const addMessage = createAction(types.ADDED_MESSAGE, (id, text) => ({id, text}))
export const removeMessage = createAction(types.REMOVED_MESSAGE, id => ({id}))
