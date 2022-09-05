import { RootType } from '../../utils/rootType.ts'

export default function ({
  rootType,
  hasVariables,
  queryName,
  returnType,
  isWatchQuery = false,
}: Props) {
  let methodName = {
    [RootType.Query]: 'query',
    [RootType.Mutation]: 'mutate',
    [RootType.Subscription]: 'subscribe',
  }[rootType]

  if (isWatchQuery && rootType === RootType.Query) {
    methodName = 'watchQuery'
  }

  if (rootType === RootType.Subscription) {
    return `
		// apollo call
		const zenObs = this.client.${methodName}<${returnType}>({
			...mergedOptions,
			query: ${rootType},${
      hasVariables
        ? `
			variables: props,`
        : ''
    }
		})

		return zenObs
    // from(fixObservable(zenObs)).pipe(
		// 	map(result => getResultData<${returnType}>(result, '${queryName}'))
		// )
    `
  }

  if (isWatchQuery) {
    return `
		const zenObs = this.client.watchQuery<${returnType}>({
			...mergedOptions,
			query,${
        hasVariables
          ? `
			variables: props,`
          : ''
      }
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return zenObs.map((x: any) => getResultData<${returnType}>(x, '${queryName}'))`
  }

  return `
		// apollo call
		return this.client.${methodName}({
			...mergedOptions,
			${rootType},${
    hasVariables
      ? `
			variables: props,`
      : ''
  }
		}).then((result: any) => getResultData<${returnType}>(result, '${queryName}'))`
}

interface Props {
  rootType: RootType
  hasVariables: boolean
  queryName: string
  returnType: any
  isWatchQuery?: boolean
}
