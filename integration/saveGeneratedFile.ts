import { fs, path } from '../deps.ts'

export default function (location: string, output: string) {
  const fullpath = path.join(location)

  fs.ensureFileSync(fullpath)

  Deno.writeTextFileSync(fullpath, output)
}
