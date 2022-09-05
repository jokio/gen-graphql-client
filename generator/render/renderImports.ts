export default function () {
  return `
import {
	ApolloClient,
	ErrorPolicy,
	FetchPolicy,
	MutationOptions,
	OperationVariables,
	QueryOptions,
	SubscriptionOptions,
	WatchQueryOptions,
} from '@apollo/client/core'
import { UpdateQueryFn } from '@apollo/client/core/watchQueryOptions'

// gql2 - to ignore apollo extention validation
// for now there is no better way
import gql2 from 'graphql-tag'

// DocumentNode type for fragment type safety
import { DocumentNode } from 'graphql'
`
}
