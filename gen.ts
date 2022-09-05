import { parseFlags } from './deps.ts'
import gen from './mod.ts'

const flags = parseFlags(Deno.args)

const endpointUrl = flags._[0] ?? flags.e
const outputUrl = flags._[1] ?? flags.o ?? 'graphql.generated.ts'
const typeNamePrefix = flags.prefix ?? ''
const enumToUnion = !flags.generateEnums

console.log('Introspecting : ', endpointUrl)

gen({
  endpointUrl,
  output: outputUrl,
  typeNamePrefix,
  enumToUnion,
})
