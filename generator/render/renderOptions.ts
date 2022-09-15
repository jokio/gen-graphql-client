export default function (
  fragmentName: string,
  hasResultType: boolean,
  skipMergingOptions = false,
  returnClassName = '',
  useFetch = false
) {
  const fragmentNameSection = hasResultType
    ? `
		const fragmentName = mergedOptions?.fragmentName || getFirstFragmentName(fragment, '${returnClassName}') || '${fragmentName}'`
    : ''

  return `
  ${
    useFetch
      ? `
    const mergedOptions = ${skipMergingOptions ? '{}' : 'options'}
      `
      : `
		const mergedOptions = {
			...<any>this.defaultOptions,
			${skipMergingOptions ? '' : '...options,'}
		}
    `
  }

		${fragmentNameSection}
`
}
