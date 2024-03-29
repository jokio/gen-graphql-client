# Gen. GraphQL Client

Work with your graphql endpoints type-safed way.

The script will do the schema introspection and next map it to typescript types.

## Requirements

* [Deno](https://deno.land) (`curl -fsSL https://deno.land/x/install/install.sh | sh`)

_You can think about Deno as a modern version of python, or "node.js done right"._

Deno is used only for type generation, next you can use the generated file with node.js as well, it's a regular typescript file.

## How to use

Minimal:

```
deno run -A https://deno.land/x/gen_graphql@v2.0/gen.ts http://localhost:5000/graphql
```

Advanced:

```
deno run -A https://deno.land/x/gen_graphql@v2.0/gen.ts -e http://localhost:5000/graphql -o src/graphql.generated.ts --prefix Gql
```

## Params

- `-e` - GraphQL endpoint url
- `-o` - Generated output file path (default `graphql.generated.ts`)
- `--prefix` - Prefix for generated types
- `--enums` - Generate enums instead of ts union types for GraphQL Enums
- `--defaultFragment` - Generate default fragments for queries with all fields (level 1 only)
- `--fetch` - Use `fetch` instead of `Apollo Client` (zero dependency)

## React

Check out [react](./react/) folder for examples
