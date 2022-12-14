import generateProxy from './generator/generateProxy.ts'
import getIntropsectionSchema from './integration/getIntropsectionSchema.ts'
import saveGeneratedFile from './integration/saveGeneratedFile.ts'

export default async function ({
  graphqlUrl,
  outputUrl,
  generateDefaultFragments,
  includeTypeName,
  typeNamePrefix,
  typeNamePostfix,
  enumToUnion,
  useFetch,
}: any) {
  const introspectionSchema = await getIntropsectionSchema(graphqlUrl)
  const output = generateProxy(
    introspectionSchema,
    generateDefaultFragments,
    includeTypeName,
    typeNamePrefix,
    typeNamePostfix,
    enumToUnion,
    useFetch
  )

  saveGeneratedFile(outputUrl, output)
}
