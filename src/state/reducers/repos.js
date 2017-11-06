
import {map, value} from 'redux-data-structures'

import {ADDED_REPO, SET_REPO_COUNT} from 'types'

// Repos byId & allIds structure.
export const repos = map({
  addActionTypes: [ADDED_REPO],
  keyGetter: action => action.payload.name
})

// Total repo count.
export const repoCount = value({
  setActionTypes: [SET_REPO_COUNT]
})
