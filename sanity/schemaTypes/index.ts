import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import localeString from "./objects/localeString";
import localeBlock from "./objects/localeBlock";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, localeString, localeBlock],
};
