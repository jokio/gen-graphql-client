import generateProxy from "./generator/generateProxy.ts";
import getIntropsectionSchema from "./integration/getIntropsectionSchema.ts";
import saveGeneratedFile from "./integration/saveGeneratedFile.ts";

export default async function ({
  graphqlUrl,
  outputUrl,
  generateDefaultFragments,
  useApolloClientV3,
  includeTypeName,
  typeNamePrefix,
  typeNamePostfix,
}: any) {
  const introspectionSchema = await getIntropsectionSchema(graphqlUrl);
  const output = generateProxy(
    introspectionSchema,
    generateDefaultFragments,
    useApolloClientV3,
    includeTypeName,
    typeNamePrefix,
    typeNamePostfix
  );

  saveGeneratedFile(outputUrl, output);
}
