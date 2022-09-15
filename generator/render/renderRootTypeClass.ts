export default function ({
  className,
  renderPropTypes,
  renderMethods,
  isWatchQuery,
  onlyDocument,
  useFetch,
}: any) {
  return `
// ${className} props -----------------------------------
${renderPropTypes()}

// ${className} apis ------------------------------------
export class ${className}${onlyDocument ? 'Document' : ''} {

	constructor(
    ${
      useFetch
        ? `
    private url: string,
    private getHeaders: () => Record<string, string> = () => ({}),
    private fetchGraphql: FetchGraphql = defaultFetchGraphql,
    private gql?: any
    `
        : `
    private client: ApolloClient<any>, 
    private defaultOptions: GraphqlCallOptions = {} ${
      isWatchQuery
        ? ', private subscriptionDocument: SubscriptionDocument | null = null'
        : ''
    },
    private gql?: any
  `
    }) { }
${renderMethods()}
}
`
}
