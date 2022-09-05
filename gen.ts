import { parseFlags } from './deps.ts'
import gen from './mod.ts'

const flags = parseFlags(Deno.args)

const endpointUrl = flags.e ?? flags._[0]
const outputUrl = flags.o ?? 'graphql.generated.ts'
const typeNamePrefix = flags.prefix ?? ''
const enumToUnion = !flags.generateEnums
const generateDefaultFragments =
  !!flags.defaultFragment || !!flags.defaultFragments

console.log('Introspecting : ', endpointUrl)

gen({
  endpointUrl,
  output: outputUrl,
  typeNamePrefix,
  enumToUnion,
  generateDefaultFragments,
})
