# Gen. GraphQL Client

Work with your graphql endpoints type-safed way.

The script will do the schema introspection and next map it to typescript types.

## How to use

Minimal:

```
deno run -A https://deno.land/x/gen_graphql/gen.ts http://localhost:5000/graphql
```

Advanced:

```
deno run -A https://deno.land/x/gen_graphql/gen.ts -e http://localhost:5000/graphql -o src/graphql.generated.ts --prefix Gql
```

## Params

- `-e` - GraphQL endpoint url
- `-o` - Generated output file path (default `graphql.generated.ts`)
- `--prefix` - Prefix for generated types
- `--enums` - Generate enums instead of ts union types for GraphQL Enums
- `--defaultFragment` - Generate default fragments for queries with all fields (level 1 only)
