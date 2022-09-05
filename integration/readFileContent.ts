import { pathJoin } from '../deps.ts'

export default function (location: string) {
  const __dirname = new URL('.', import.meta.url).pathname
  const fullpath = pathJoin(__dirname, '..', location)

  const result = Deno.readTextFileSync(fullpath)

  return result
}
