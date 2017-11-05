
import {call} from 'redux-saga/effects'

import {getRepos} from 'state/api/queries'

// @TODO Update view to display errors.
// @TODO Error reducer/messaging.
// @TODO Repo reducer.
export function * loadHome () {
  try {
    yield console.log('Home Route')
    const response = yield call(getRepos)
    const {data} = response
    if (!data) {
      throw new Error(response)
    }
    yield console.log('Graphql Response', data)
  } catch (e) {
    console.error(e)
  }
}
