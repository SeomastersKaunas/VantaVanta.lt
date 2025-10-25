export type Product = {
  slug: string;
  nameKey: string;
  images: string[];
  descriptionKey: string;
  sessionsNoteKey: string;
  benefits: {
    titleKey: string;
    items: string[];
  };
  specifications: {
    titleKey: string;
    items: {
      label: string;
      valueKey: string;
    }[];
  };
  materials: {
    titleKey: string;
    items: string[];
  };
  disclaimerKey: string;
};

const products: Product[] = [
  {
    slug: "oak-vanta",
    nameKey: "product_page.oak_vanta_name",
    images: [
      "/images/product/oak-main.png",
      "/images/product/oak-thumb1.png",
      "/images/product/oak-thumb2.png",
      "/images/product/oak-thumb3.png",
    ],
    descriptionKey: "product_page.oak_vanta_description",
    sessionsNoteKey: "product_page.oak_vanta_sessions",
    benefits: {
      titleKey: "product_page.oak_vanta_benefits_title",
      items: [
        "product_page.oak_vanta_benefits_item1",
        "product_page.oak_vanta_benefits_item2",
        "product_page.oak_vanta_benefits_item3",
      ],
    },
    specifications: {
      titleKey: "product_page.oak_vanta_specs_title",
      items: [
        { label: "Dry:", valueKey: "product_page.oak_vanta_specs_dry" },
        { label: "Weight:", valueKey: "product_page.oak_vanta_specs_weight" },
        { label: "Width:", valueKey: "product_page.oak_vanta_specs_width" },
        { label: "Length:", valueKey: "product_page.oak_vanta_specs_length" },
      ],
    },
    materials: {
      titleKey: "product_page.oak_vanta_materials_title",
      items: [
        "product_page.oak_vanta_materials_branches",
        "product_page.oak_vanta_materials_rope",
      ],
    },
    disclaimerKey: "product_page.oak_vanta_disclaimer",
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
