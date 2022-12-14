import type {
  IntrospectionInterfaceType,
  IntrospectionObjectType,
  IntrospectionType,
  IntrospectionTypeRef,
} from '../../graphql.d.ts'

export default function generateResultTypeFields(
  type: IntrospectionTypeRef,
  allTypes: IntrospectionType[]
): string[] | null {
  switch (type.kind) {
    case 'ENUM':
    case 'SCALAR':
      return null

    case 'NON_NULL':
    case 'LIST':
      return generateResultTypeFields(type.ofType, allTypes)

    case 'INTERFACE': {
      const resultType = <IntrospectionInterfaceType>(
        allTypes.find(x => x.name === type.name)
      )
      if (!resultType) {
        return null
      }

      return resultType.fields.map((x: any) => x.name)
    }

    case 'UNION': {
      /**
       * User must provide the fragment
       */
      return []
    }

    case 'OBJECT': {
      const resultType = <IntrospectionObjectType>(
        allTypes.find(x => x.name === type.name)
      )
      if (!resultType) {
        return null
      }

      return resultType.fields.map((x: any) => x.name)
    }

    default:
      console.log('MISSING RESULT TYPE', type.kind)
      return null
  }
}
