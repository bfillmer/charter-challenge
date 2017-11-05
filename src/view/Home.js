
import React from 'react'

import {Section} from 'view/Shared/Section'
import {H1} from 'view/Shared/Typography'

import {Error} from 'view/Error'

const {REACT_APP_USER} = process.env

export const Home = () => (
  <Section>
    <H1>Repositories for <em>{REACT_APP_USER}</em></H1>
    <Error />
  </Section>
)
