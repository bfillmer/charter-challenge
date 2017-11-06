
import {map} from 'redux-data-structures'

import {ADDED_MESSAGE, REMOVED_MESSAGE} from 'types'

export const messages = map({
  addActionTypes: [ADDED_MESSAGE],
  removeActionTypes: [REMOVED_MESSAGE]
})
