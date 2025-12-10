import { defineType, defineField } from "sanity";
import { supportedLanguages } from "@/sanity/lib/i18n";

export default defineType({
  name: "localeString",
  title: "Localized String",
  type: "object",

  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: supportedLanguages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: "string",
      fieldset: lang.isDefault ? undefined : "translations",
    })
  ),
});
