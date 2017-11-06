
import gql from 'graphql-tag'

import {client} from 'state/api/client'

const {REACT_APP_USER} = process.env

const query = (q) => () => client.query({query: q})
  .then(data => data)
  .catch(error => error)

const GET_GITHUB_REPOS = gql`
  query GetGitHubRepos {
    user(login: "${REACT_APP_USER}") {
      login
      repositories(first: 25) {
      totalCount,
        nodes {
          url,
          name,
          description,
          createdAt,
        }
      }
    }
  }
`

export const getRepos = query(GET_GITHUB_REPOS)
