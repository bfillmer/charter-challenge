
import {call, put} from 'redux-saga/effects'

import {getRepos} from 'state/api/queries'

import {ERROR_MESSAGE} from 'types'
import {addMessage} from 'actions'

// @TODO Update view to display errors.
// @TODO Error reducer/messaging.
// @TODO Repo reducer.
export function * loadHome () {
  try {
    const response = yield call(getRepos)
    const {data} = response
    if (!data) {
      throw new Error(response)
    }
    yield console.log('Graphql Response', data)
  } catch (e) {
    yield put(addMessage(ERROR_MESSAGE, e.message))
  }
}
