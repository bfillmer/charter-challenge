
import {map, value} from 'redux-data-structures'

import {HYDRATED_REPOS, SET_REPO_COUNT} from 'types'

// Hydrate our store with repos from a pull. Destructive action, wipes out existing state.
const hydrateRepos = (repos) => ({
  byId: repos.reduce((byId, repo) => Object.assign({}, byId, {[repo.name]: repo}), {}),
  allIds: repos.map(repo => repo.name)
})

// redux-data-structures handles most use-cases for adding and removing items well, but
// has no concept of a hydrate action that setups an entire store in one go. Here we
// extend the reducer to allow for that.
export const repos = (state, action) => {
  switch (action.type) {
    case HYDRATED_REPOS:
      return hydrateRepos(action.payload)
    default:
      return map({
        keyGetter: action => action.payload.name
      })(state, action)
  }
}

// Total repo count.
export const repoCount = value({
  setActionTypes: [SET_REPO_COUNT]
})
