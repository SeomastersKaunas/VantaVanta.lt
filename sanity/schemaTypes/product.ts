import { defineField, defineType } from "sanity";
import { supportedLanguages } from "@/sanity/lib/i18n";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: 'The name of the product (e.g., "Beržo vanta").',
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      description: "The unique URL identifier for the product.",
      type: "object",

      fields: supportedLanguages.map((lang) =>
        defineField({
          name: lang.id,
          title: lang.title,
          type: "slug",
          options: {
            source: (doc) => (doc.title as any)?.[lang.id] || "",
            maxLength: 96,
          },
          validation: (Rule) => Rule.required(),
        })
      ),
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      description: "The primary, heart-shaped image for the product.",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category (Quercus)",
      description: 'The scientific category name (e.g., "Betula").',
      type: "localeString",
    }),

    defineField({
      name: "gallery",
      title: "Image Gallery",
      description: "Additional images for the product page.",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    defineField({
      name: "cardContent",
      title: "Card Content",
      description: "A short, engaging description for summary cards or intros.",
      type: "localeBlock",
    }),

    defineField({
      name: "content",
      title: "Main Content",
      description:
        "The detailed product description, including benefits, specs, etc.",
      type: "localeBlock",
    }),
  ],

  preview: {
    select: {
      title: "title.lt",
      media: "mainImage",
    },
  },
});
