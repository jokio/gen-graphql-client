import { RootType } from '../../utils/rootType.ts'

export default function ({
  rootType,
  methodName,
  generateDefaultFragments,
  hasProps,
  propsType,
  renderContent,
  hasResultType,
  returnClassFullname,
  useFetch,
}: any) {
  const omittedOptionsType = (
    {
      [RootType.Query]: useFetch ? '' : 'OmittedQueryOptions',
      watchQuery: `OmittedWatchQueryOptions & SubscribeToMoreOptions<{ ${methodName} : ${returnClassFullname}}>`,
      cacheWriteQuery: 'OmittedQueryOptions',
      [RootType.Mutation]: useFetch ? '' : 'OmittedMutationOptions',
      [RootType.Subscription]: 'OmittedSubscriptionOptions',
    } as any
  )[rootType]

  const isCacheWriteQueryMode = rootType === 'cacheWriteQuery'

  const fragmentRequiredSymbol = generateDefaultFragments ? '?' : ''

  const fragmentProp = hasResultType
    ? `fragment${fragmentRequiredSymbol}: ${
        useFetch ? 'string' : 'string | DocumentNode'
      },`
    : ''

  const fragmentType = hasResultType ? 'FragmentOptions' : ''

  return `
	${methodName}(
		${hasProps ? `props: ${propsType},` : ``}
		${
      isCacheWriteQueryMode
        ? `data: any,
			${fragmentProp}`
        : `
			${fragmentProp}
			options?: ${
        useFetch
          ? `{}`
          : `GraphqlCallOptions<${
              rootType === 'watchQuery'
                ? 'WatchQueryFetchPolicy'
                : 'FetchPolicy'
            }>`
      } ${fragmentType ? `& ${fragmentType}` : ''}${
            omittedOptionsType ? ' & ' : ''
          }${omittedOptionsType},`
    }
	) {
	${renderContent()}
	}`
}
