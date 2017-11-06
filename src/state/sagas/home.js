
import {call, put} from 'redux-saga/effects'

import {getRepos} from 'state/api/queries'

import {ERROR_MESSAGE} from 'types'
import {addMessage, addRepo, setRepoCount} from 'actions'

const extractRepos = data => data && data.user && data.user.repositories

// @TODO Setup a smarter query such that on load we will load the first 25, then
// immediately queue up subsequent queries until we have all the repos up to the
// repoCount. Will also need to optimize the view to only re-render the list when
// needed instead of every time the data updates.
export function * loadHome () {
  try {
    const response = yield call(getRepos)
    const {data} = response
    if (!data) {
      throw new Error(response)
    }
    // Massage data, store in our redux store.
    const {nodes, totalCount} = yield call(extractRepos, data)
    yield put(setRepoCount(totalCount))
    // Still on the fence about the iteration and individual adding of repos to the store
    // versus setting up a single hydrate action to just push everything in. On the one hand
    // we would have to iterate to create our data structures anyway, so having actions fire
    // is actually "good" in that we see that iteration, instead of doing the iteration in JS
    // first then only see one action.
    yield console.log('Repos', nodes)
  } catch (e) {
    yield put(addMessage(ERROR_MESSAGE, e.message))
  }
}
