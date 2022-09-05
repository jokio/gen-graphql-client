import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { createContext, PropsWithChildren, useContext } from 'react'
import getClient, { Mutation, Query, WatchQuery } from '../graphql.generated'

/* Context */
interface GraphQLContextData {
  query: Query
  mutation: Mutation
  watchQuery: WatchQuery

  /**
   * Use ONLY in advanced use cases.
   */
  client: ApolloClient<NormalizedCacheObject>
}

export const GraphQLContext = createContext<GraphQLContextData>(null as any)

/* Provider */
interface Props {
  serverUrl: string
}

export function GraphQLContextProvider({
  serverUrl,
  children,
}: PropsWithChildren<Props>) {
  const url = `${serverUrl}/graphql`

  const accessToken = `/* ACCESS TOKEN GOES HERE */`

  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `bearer ${accessToken}`,
    },
  })

  const generatedClient = getClient(client)

  const graphContext = {
    client: client,
    query: generatedClient.query,
    watchQuery: generatedClient.watchQuery,
    mutation: generatedClient.mutation,
  }

  return (
    <GraphQLContext.Provider value={graphContext}>
      {children}
    </GraphQLContext.Provider>
  )
}

/* Use */
export function useGraphQL() {
  const { query, mutation, watchQuery, client } = useContext(GraphQLContext)

  return {
    query,
    mutation,
    watchQuery,
    client,
  }
}
