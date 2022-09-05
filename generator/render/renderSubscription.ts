export default function ({
  hasFragment,
  queryName,
  variablesDeclarationString,
  variablesString,
}: any) {
  if (!hasFragment) {
    return `	// build query
		const subscription = gql2\`
		subscription ${queryName}${variablesDeclarationString} {
			${queryName}${variablesString}
		}
		\``
  }

  return `
		// build query
		const subscription = gql2\`
		subscription ${queryName}${variablesDeclarationString} {
			${queryName}${variablesString} {
				...\${fragmentName}
			}
		}

		\${finishedFragment}
		\``
}
