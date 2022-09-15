export default function ({
  hasFragment,
  queryName,
  variablesDeclarationString,
  variablesString,
  useFetch,
}: any) {
  if (!hasFragment) {
    return `	// build query
		const query = ${useFetch ? '' : 'gql2'}\`
		query ${queryName}${variablesDeclarationString} {
			${queryName}${variablesString}
		}
		\``
  }

  return `
		// build query
		const query = ${useFetch ? '' : 'gql2'}\`
		query ${queryName}${variablesDeclarationString} {
			${queryName}${variablesString} {
				...\${fragmentName}
			}
		}

		\${finishedFragment}
		\``
}
