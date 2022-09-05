import type {
  IntrospectionEnumType,
  IntrospectionInputObjectType,
  IntrospectionInterfaceType,
  IntrospectionObjectType,
  IntrospectionScalarType,
  IntrospectionType,
  IntrospectionUnionType,
} from '../../graphql.d.ts'

import getTypescriptField from './getTypescriptField.ts'

export default function (
  includeTypeName: boolean,
  typeNamePrefix: string,
  typeNamePostfix: string,
  enumToUnion: boolean
) {
  return (type: IntrospectionType) => {
    if (type.name.startsWith('__')) {
      return
    }

    switch (type.kind) {
      case 'OBJECT':
      case 'INTERFACE':
        return objectType(
          type,
          includeTypeName,
          typeNamePrefix,
          typeNamePostfix
        )

      case 'INPUT_OBJECT':
        return inputObjectType(type, typeNamePrefix, typeNamePostfix)

      case 'ENUM':
        return enumToUnion ? tsUnionType(type) : enumType(type)

      case 'SCALAR':
        return scalarType(type)

      case 'UNION':
        return unionType(type)

      default:
        console.log('MISSED GENERATION FOR', type)
        return
    }
  }
}

function objectType(
  type: IntrospectionObjectType | IntrospectionInterfaceType,
  includeTypeName: boolean,
  typeNamePrefix: string,
  typeNamePostfix: string
) {
  const fields = type.fields
    .map((x: any) => getTypescriptField(x.name, x.type))
    .map((x: any) => `\t${x}`)
    .join('\n')

  const typeName = type.name

  return `
export interface ${typeNamePrefix}${typeName}${typeNamePostfix} {${
    includeTypeName
      ? `
	__typename:"${typeName}"`
      : ''
  }
${fields}
}
${
  typeNamePrefix || typeNamePostfix
    ? `type ${typeName} = ${typeNamePrefix}${typeName}${typeNamePostfix}`
    : ''
}`
}

function inputObjectType(
  type: IntrospectionInputObjectType,
  typeNamePrefix: string,
  typeNamePostfix: string
) {
  const fields = type.inputFields
    .map((x: any) => getTypescriptField(x.name, x.type))
    .map((x: any) => `\t${x}`)
    .join('\n')

  const typeName = type.name

  return `
export interface ${typeNamePrefix}${typeName}${typeNamePostfix} {
${fields}
}
${
  typeNamePrefix || typeNamePostfix
    ? `type ${typeName} = ${typeNamePrefix}${typeName}${typeNamePostfix}`
    : ''
}`
}

function tsUnionType(type: IntrospectionEnumType) {
  const typeName = type.name
  const fields = type.enumValues.map((x: any) => `'${x.name}'`).join(' | ')

  return `
export type ${typeName} = ${fields}`
}

function enumType(type: IntrospectionEnumType) {
  const typeName = type.name
  const fields = type.enumValues
    .map((x: any) => `\t${x.name} = '${x.name}',`)
    .join('\n')

  return `
export enum ${typeName} {
${fields}
}`
}

function scalarType(type: IntrospectionScalarType) {
  const typeName = type.name
  let tsType = ''

  switch (typeName) {
    case 'ID':
      tsType = 'string'
      break

    case 'String':
      tsType = 'string'
      break

    case 'Int':
      tsType = 'number'
      break

    case 'Float':
      tsType = 'number'
      break

    case 'Boolean':
      tsType = 'boolean'
      break

    case 'DateTime':
    case 'Time':
      tsType = 'Date'
      break

    // Date already exists in JS
    case 'Date':
      return ''

    case 'JSON':
      tsType = 'any'
      break

    default:
      tsType = 'any'
      break
  }

  // export ID for later use in the application
  if (typeName === 'ID') {
    return `export type ${typeName} = ${tsType}`
  }

  return `type ${typeName} = ${tsType}`
}

function unionType(type: IntrospectionUnionType) {
  const typeName = type.name
  const valueTypes = type.possibleTypes.map((x: any) => x.name).join(' | ')

  return `export type ${typeName} = ${valueTypes}`
}
