export default function ({
  hasFragment,
  graphqlTypeName,
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

  return `		const finishedFragment = fragment || \`fragment \${fragmentName} on ${graphqlTypeName} \${localFragment}\`

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
