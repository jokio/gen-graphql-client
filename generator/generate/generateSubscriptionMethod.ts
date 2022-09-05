import type { IntrospectionField, IntrospectionType } from '../../graphql.d.ts'

import buildVariablesDeclarationString from '../../domain/buildVariablesDeclarationString.ts'
import buildVariablesPassString from '../../domain/buildVariablesPassString.ts'
import getGraphqlTypeString from '../../domain/getGraphqlTypeString.ts'
import getTypescriptPropsTypeName from '../../domain/getTypescriptPropsTypeName.ts'
import getTypescriptTypeString from '../../domain/getTypescriptTypeString.ts'
import { RootType } from '../../utils/rootType.ts'
import uncapitalizeFirstLetter from '../../utils/uncapitalizeFirstLetter.ts'
import generatePropsType from '../helper/generatePropsType.ts'
import generateResultTypeFields from '../helper/generateResultTypeFields.ts'
import renderApolloCall from '../render/renderApolloCall.ts'
import renderFragment from '../render/renderFragment.ts'
import renderMethod from '../render/renderMethod.ts'
import renderOptions from '../render/renderOptions.ts'
import renderReturnDocument from '../render/renderReturnDocument.ts'
import renderSubscription from '../render/renderSubscription.ts'

export default function (
  field: IntrospectionField,
  types: IntrospectionType[],
  generateDefaultFragments: boolean,
  onlyDocument: boolean
) {
  const queryName = field.name
  const propsType = getTypescriptPropsTypeName('Subscription', queryName)
  const inputs = field.args || []
  const methodName = uncapitalizeFirstLetter(queryName)
  const hasInputs = !!inputs.length

  const returnClassFullname = getTypescriptTypeString({
    type: field.type,
  })

  const returnClassName = getGraphqlTypeString({
    type: field.type,
    capitalizeName: true,
    onlyName: true,
  })

  const returnGraphqlTypeName = returnClassName
  const fragmentName = returnClassName + 'Data'

  const props = generatePropsType(propsType, inputs)

  const resultTypeFields = generateResultTypeFields(field.type, types)
  const hasResultType = !!resultTypeFields

  const variablesDeclarationString = buildVariablesDeclarationString(inputs)
  const variablesString = buildVariablesPassString(inputs)

  const type = <IntrospectionType>(
    types.find(x => x.name === returnGraphqlTypeName)
  )

  const method = renderMethod({
    rootType: RootType.Subscription,
    methodName,
    generateDefaultFragments,
    hasProps: hasInputs,
    propsType,
    hasResultType,
    returnClassFullname,
    renderContent: () =>
      // Render Query
      renderOptions(fragmentName, hasResultType) +
      (hasResultType
        ? renderFragment(type, generateDefaultFragments, returnGraphqlTypeName)
        : '') +
      renderSubscription({
        hasFragment: hasResultType,
        queryName,
        variablesDeclarationString,
        variablesString,
      }) +
      (onlyDocument
        ? renderReturnDocument({
            rootType: RootType.Subscription,
            hasVariables: hasInputs,
          })
        : renderApolloCall({
            rootType: RootType.Subscription,
            hasVariables: hasInputs,
            queryName,
            returnType: returnClassFullname,
          })),
  })

  return {
    method,
    props,
  }
}
