import { path } from '../deps.ts'

export default function (location: string) {
  const __dirname = new URL('.', import.meta.url).pathname
  const fullpath = path.join(__dirname, '..', location)

  const result = Deno.readTextFileSync(fullpath)

  return result
}
