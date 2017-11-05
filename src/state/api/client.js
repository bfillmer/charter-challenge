
import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import {InMemoryCache} from 'apollo-cache-inmemory'

const {REACT_APP_PAT} = process.env

// Rather than leverage the full apollo client implementation for React we leverage the lower
// level ApolloClient and leverage our redux-saga implementation to run all our side-effects.

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
})

const authLink = setContext((_, {headers}) => ({
  headers: {
    ...headers,
    authorization: REACT_APP_PAT ? `Bearer ${REACT_APP_PAT}` : null
  }
}))

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
