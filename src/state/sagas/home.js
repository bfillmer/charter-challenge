
import {ApolloClient} from 'apollo-client'
import gql from 'graphql-tag'
import {createHttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import {InMemoryCache} from 'apollo-cache-inmemory'

const {REACT_APP_PAT, REACT_APP_USER} = process.env

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
})

const authLink = setContext((_, {headers}) => ({
  headers: {
    ...headers,
    authorization: REACT_APP_PAT ? `Bearer ${REACT_APP_PAT}` : null
  }
}))

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const GET_GITHUB_REPOS = gql`
  query GetGitHubRepos {
    user(login: "${REACT_APP_USER}") {
      login
      repositories(first: 25) {
        nodes {
          name
        }
      }
    }
  }
`

export function * loadHome () {
  yield console.log('Home Route')
  client.query({
    query: GET_GITHUB_REPOS
  })
    .then(data => console.log(data))
    .catch(error => console.error(error))
}
