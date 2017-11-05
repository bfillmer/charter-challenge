
import React from 'react'
import {connect} from 'react-redux'

import {P} from 'view/Shared/Typography'

import {ERROR_MESSAGE} from 'types'
import {getTheme} from 'view/theme'

const ErrorP = P.extend`
  color: ${getTheme('error')};
`

const mapStateToProps = state => ({
  error: state.messages.byId[ERROR_MESSAGE] || {}
})

const Container = ({error}) => error.text ? <ErrorP>{error.text}</ErrorP> : null

export const Error = connect(mapStateToProps)(Container)
