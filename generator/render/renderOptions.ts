export default function (
  fragmentName: string,
  hasResultType: boolean,
  skipMergingOptions = false,
  returnClassName = ''
) {
  const fragmentNameSection = hasResultType
    ? `
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment, '${returnClassName}') || '${fragmentName}'`
    : ''

  return `
		const mergedOptions = {
			...<any>this.defaultOptions,
			${skipMergingOptions ? '' : '...options,'}
		}

		${fragmentNameSection}
`
}
