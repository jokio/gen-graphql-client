import renderImports from './renderImports.ts'

export default function ({
  generatedOtherTypes,
  generatedQuery,
  generatedWatchQuery,
  generatedRefetchQuery,
  generatedCacheWriteQuery,
  generatedMutation,
  generatedSubscription,
  generatedSubscriptionDocument,
  generatedQueryTypesEnum,
}: any) {
  return `${renderImports()}

// tslint:disable

// types enum
${generatedQueryTypesEnum || ''}

// types
${generatedOtherTypes}

${generatedQuery || ''}
${generatedWatchQuery || ''}
${generatedRefetchQuery || ''}
${generatedCacheWriteQuery || ''}
${generatedMutation || ''}
${generatedSubscription || ''}
${generatedSubscriptionDocument || 'class SubscriptionDocument { }'}

// helper types
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
${
  generatedQuery
    ? `
type OmittedQueryOptions = Omit<Partial<QueryOptions<OperationVariables>>, 'query' | 'variables'>
type OmittedWatchQueryOptions = Omit<Partial<WatchQueryOptions<OperationVariables>>, 'variables' | 'query'>

type SubscribeToMoreOptions<T> = {
	subscribeToMore?:
	  {
		graphqlDocument: { document: any, variables?: any } |
			((subscription: SubscriptionDocument) => { document: any, variables?: any }),
		updateQuery: UpdateQueryFn<T, any, any>
	  }[]
}

`
    : ''
}
${
  generatedMutation
    ? `
type OmittedMutationOptions = Omit<Partial<MutationOptions<OperationVariables>>, 'mutation' | 'variables'>`
    : ''
}
${
  generatedSubscription
    ? `
type OmittedSubscriptionOptions = Omit<Partial<SubscriptionOptions<OperationVariables>>, 'query' | 'variables'>`
    : ''
}


interface FragmentOptions {
	fragmentName?: string
}

interface GraphqlCallOptions<TFetchPolicy = FetchPolicy> {
	fetchPolicy?: TFetchPolicy
	errorPolicy?: ErrorPolicy
}

interface DefaultOptions {
	${generatedQuery ? 'query?: GraphqlCallOptions' : ''}
	${
    generatedWatchQuery
      ? 'watchQuery?: GraphqlCallOptions<WatchQueryFetchPolicy>'
      : ''
  }
	${generatedMutation ? `mutation?: Omit<GraphqlCallOptions, 'fetchPolicy'>` : ''}
	${
    generatedSubscription
      ? `subscription?: Omit<GraphqlCallOptions, 'errorPolicy'>`
      : ''
  }
}

export interface Client {
	${generatedQuery ? 'query: Query' : ''}
	${generatedWatchQuery ? 'watchQuery: WatchQuery' : ''}
	${generatedRefetchQuery ? 'refetchQuery: RefetchQuery' : ''}
	${generatedCacheWriteQuery ? 'cacheWriteQuery: CacheWriteQuery' : ''}
	${generatedMutation ? 'mutation: Mutation' : ''}
	${generatedSubscription ? 'subscription: Subscription' : ''}
}

export default function (client: ApolloClient<any>, defaultOptions: DefaultOptions = {}): Client {
	${
    generatedSubscriptionDocument
      ? 'const subscriptionDocument = new SubscriptionDocument(client, defaultOptions.subscription || {})'
      : ''
  }
	return {
		${generatedQuery ? 'query: new Query(client, defaultOptions.query || {}),' : ''}
		${
      generatedWatchQuery
        ? `watchQuery: new WatchQuery(client, defaultOptions.query || {}, ${
            generatedSubscriptionDocument ? 'subscriptionDocument' : 'null'
          }),`
        : ''
    }
		${
      generatedRefetchQuery
        ? 'refetchQuery: new RefetchQuery(client, defaultOptions.query || {}),'
        : ''
    }
		${
      generatedCacheWriteQuery
        ? 'cacheWriteQuery: new CacheWriteQuery(client, defaultOptions.query || {}),'
        : ''
    }
		${
      generatedMutation
        ? 'mutation: new Mutation(client, defaultOptions.mutation || {}),'
        : ''
    }
		${
      generatedSubscription
        ? 'subscription: new Subscription(client, defaultOptions.subscription || {}),'
        : ''
    }
	}
}

function getResultData<T>(result: any, dataFieldName: any) {
	// if error, throw it
	if (result.errors) {
		throw new Error(<any>result.errors)
	}

	if (!result.data) {
		return <T><any>null
	}

	// cast the result and return (need any for scalar types, to avoid compilation error)
	return <T><any>result.data[dataFieldName]
}

function getFirstFragmentName(fragmentParam: string | Object | undefined, returnClassName: string) {

  if (typeof fragmentParam !== 'object') { return }
  const fragment = fragmentParam as any


  var fragmentDef = fragment.definitions.filter(
    (x: any) => x.kind === 'FragmentDefinition' && (!returnClassName || x.typeCondition?.name?.value === returnClassName)
  )[0]

  const fragmentName =
    fragmentDef.kind === 'FragmentDefinition' && fragmentDef?.name?.value

  return fragmentName
}
`
}
