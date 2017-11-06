
import {combineReducers} from 'redux'

import {reducer as location} from 'state/routes'

import {messages} from 'state/reducers/messages'
import {repos, repoCount} from 'state/reducers/repos'

export const reducers = combineReducers({
  location,
  messages,
  repos,
  repoCount
})
