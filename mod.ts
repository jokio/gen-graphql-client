import run from './run.ts'

export default function ({
  endpointUrl,
  output: outputUrl,
  generateDefaultFragments = false,
  useApolloClientV3 = false,
  includeTypeName = false,
  typeNamePrefix = '',
  typeNamePostfix = '',
}: any) {
  const startedAt = Date.now()

  run({
    graphqlUrl: endpointUrl,
    outputUrl,
    generateDefaultFragments,
    useApolloClientV3,
    includeTypeName,
    typeNamePrefix,
    typeNamePostfix,
  })
    .then(() => {
      console.log(`Generated successfully at: ${outputUrl}`)
      console.log(`Duration: ${Date.now() - startedAt}ms`)
    })
    .catch((err: any) => {
      console.error(err)
    })
}
