export default function ({
  hasFragment,
  queryName,
  variablesDeclarationString,
  variablesString,
}: any) {
  if (!hasFragment) {
    return `	// build query
		const query = gql2\`
		query ${queryName}${variablesDeclarationString} {
			${queryName}${variablesString}
		}
		\``
  }

  return `
		// build query
		const query = gql2\`
		query ${queryName}${variablesDeclarationString} {
			${queryName}${variablesString} {
				...\${fragmentName}
			}
		}

		\${finishedFragment}
		\``
}
