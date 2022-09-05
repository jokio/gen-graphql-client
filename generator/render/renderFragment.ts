import type {
  IntrospectionOutputTypeRef,
  IntrospectionType,
} from '../../graphql.d.ts'

export default function (
  type: IntrospectionType,
  generateDefaultFragments: boolean,
  graphqlTypeName: string
) {
  let fieldNames: string[] = []

  if (!generateDefaultFragments) {
    return `
		const finishedFragment = fragment
		`
  }

  if (type.kind === 'OBJECT' || type.kind === 'INTERFACE') {
    fieldNames = type.fields
      .filter((x: any) => isKindAllowed(x.type))
      .map((x: any) => `\t\t\t${x.name}`)
  }

  return `
		const finishedFragment = fragment || \`fragment \${fragmentName} on ${graphqlTypeName} {
${fieldNames.join('\n')}
		}\`
`
}

export function isKindAllowed(type: IntrospectionOutputTypeRef): boolean {
  switch (type.kind) {
    case 'ENUM':
    case 'SCALAR':
      return true

    case 'NON_NULL':
    case 'LIST':
      return isKindAllowed(type.ofType)

    default:
      return false
  }
}
