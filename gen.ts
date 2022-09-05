import gen from './mod.ts'

const endpointUrl = Deno.args[0]
const outputUrl = Deno.args[1] ?? 'graphql.generated.ts'
const typeNamePrefix = Deno.args[2] ?? ''

gen({
  endpointUrl,
  output: outputUrl,
  typeNamePrefix,
})
