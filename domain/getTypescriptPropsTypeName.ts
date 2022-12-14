import capitalizeFirstLetter from '../utils/capitalizeFirstLetter.ts'

export default function (prefix: string, name: string) {
  if (!name) {
    return ''
  }

  const capitalName = capitalizeFirstLetter(name)

  return `${prefix}${capitalName}Props`
}
