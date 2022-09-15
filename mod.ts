import run from './run.ts'

export default function ({
  endpointUrl,
  output: outputUrl,
  generateDefaultFragments = false,
  includeTypeName = false,
  typeNamePrefix = '',
  typeNamePostfix = '',
  enumToUnion = true,
  useFetch,
}: any) {
  const startedAt = Date.now()

  run({
    graphqlUrl: endpointUrl,
    outputUrl,
    generateDefaultFragments,
    includeTypeName,
    typeNamePrefix,
    typeNamePostfix,
    enumToUnion,
    useFetch,
  })
    .then(() => {
      console.log(`Generated at  :  ${outputUrl}`)
      console.log(`Execution time:  ${Date.now() - startedAt}ms`)
    })
    .catch((err: any) => {
      console.error(err)
    })
}
