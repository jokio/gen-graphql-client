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
}: any) {
  const omittedOptionsType = (
    {
      [RootType.Query]: 'OmittedQueryOptions',
      watchQuery: `OmittedWatchQueryOptions & SubscribeToMoreOptions<{ ${methodName} : ${returnClassFullname}}>`,
      cacheWriteQuery: 'OmittedQueryOptions',
      [RootType.Mutation]: 'OmittedMutationOptions',
      [RootType.Subscription]: 'OmittedSubscriptionOptions',
    } as any
  )[rootType]

  const isCacheWriteQueryMode = rootType === 'cacheWriteQuery'

  const fragmentRequiredSymbol = generateDefaultFragments ? '?' : ''

  const fragmentProp = hasResultType
    ? `fragment${fragmentRequiredSymbol}: string | DocumentNode,`
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
			options?: GraphqlCallOptions ${
        fragmentType ? `& ${fragmentType}` : ''
      } & ${omittedOptionsType},`
    }
	) {
	${renderContent()}
	}`
}
