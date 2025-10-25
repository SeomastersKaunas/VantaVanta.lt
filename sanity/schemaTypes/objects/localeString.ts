import { defineType, defineField } from "sanity";
import { supportedLanguages } from "@/sanity/lib/i18n";

export default defineType({
  name: "localeString",
  title: "Localised string",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: "string",
      fieldset: lang.isDefault ? undefined : "translations",
    })
  ),
});
