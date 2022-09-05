export default function (
  fragmentName: string,
  hasResultType: boolean,
  skipMergingOptions = false
) {
  const fragmentNameSection = hasResultType
    ? `
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || '${fragmentName}'`
    : ''

  return `
		const mergedOptions = {
			...<any>this.defaultOptions,
			${skipMergingOptions ? '' : '...options,'}
		}

		${fragmentNameSection}
`
}
