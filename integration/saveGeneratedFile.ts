import { ensureFileSync, pathJoin } from '../deps.ts'

export default function (location: string, output: string) {
  const fullpath = pathJoin(location)

  ensureFileSync(fullpath)

  Deno.writeTextFileSync(fullpath, output)
}
