import { IntrospectionType } from '../graphql.d.ts'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter.ts'
import { RootType } from '../utils/rootType.ts'
import generateMutationMethod from './generate/generateMutationMethod.ts'
import generateQueryMethod from './generate/generateQueryMethod.ts'
import generateRefetchQueryMethod from './generate/generateRefetchQueryMethod.ts'
import generateSubscriptionMethod from './generate/generateSubscriptionMethod.ts'
import generateCacheWriteQueryMethod from './generate/generateUpdateCacheQueryMethod.ts'
import generateWatchQueryMethod from './generate/generateWatchQueryMethod.ts'
import renderRootTypeClass from './render/renderRootTypeClass.ts'

export default (
    typeName: RootType | 'watchQuery' | 'refetchQuery' | 'cacheWriteQuery',
    otherTypes: IntrospectionType[],
    generateDefaultFragments: boolean,
    onlyDocument = false
  ) =>
  (queryType: IntrospectionType) => {
    if (
      !queryType ||
      queryType.kind !== 'OBJECT' ||
      !queryType.fields ||
      !queryType.fields.length
    ) {
      return null
    }

    const generateOptions = {
      [RootType.Query.toString()]: generateQueryMethod,
      ['watchQuery']: generateWatchQueryMethod,
      ['refetchQuery']: generateRefetchQueryMethod,
      ['cacheWriteQuery']: generateCacheWriteQueryMethod,
      [RootType.Mutation.toString()]: generateMutationMethod,
      [RootType.Subscription.toString()]: generateSubscriptionMethod,
    }

    const generateMethod = generateOptions[typeName]

    const methodsAndProps = queryType.fields.map((x: any) =>
      generateMethod(x, otherTypes, generateDefaultFragments, onlyDocument)
    )

    const methodProps = onlyDocument
      ? []
      : methodsAndProps.map((x: any) => x.props).filter((x: any) => !!x)

    const methods = methodsAndProps.map((x: any) => x.method)

    const className = capitalizeFirstLetter(typeName)

    return renderRootTypeClass({
      className,
      renderPropTypes: () => methodProps.join('\n'),
      renderMethods: () => methods.join('\n'),
      isWatchQuery: typeName === 'watchQuery',
      onlyDocument,
    })
  }
