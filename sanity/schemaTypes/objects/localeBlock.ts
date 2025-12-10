import { defineType, defineField } from "sanity";
import { supportedLanguages } from "@/sanity/lib/i18n";

export default defineType({
  name: "localeBlock",
  title: "Localized Block",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: supportedLanguages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: "array",
      of: [{ type: "block" }],
      fieldset: lang.isDefault ? undefined : "translations",
    })
  ),
});
