export default function ({
  hasFragment,
  queryName,
  variablesDeclarationString,
  variablesString,
  useFetch,
}: any) {
  if (!hasFragment) {
    return `	// build query
		const mutation = ${useFetch ? '' : 'gql2'}\`
		mutation ${queryName}${variablesDeclarationString} {
			${queryName}${variablesString}
		}
		\``
  }

  return `
		// build query
		const mutation = ${useFetch ? '' : 'gql2'}\`
		mutation ${queryName}${variablesDeclarationString} {
			${queryName}${variablesString} {
				...\${fragmentName}
			}
		}

		\${finishedFragment}
		\``
}
