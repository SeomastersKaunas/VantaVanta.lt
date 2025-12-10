export const supportedLanguages = [
  { id: 'lt', title: 'Lithuanian', isDefault: true },
  { id: 'en', title: 'English' },
  { id: 'ru', title: 'Russian' },
  { id: 'pl', title: 'Polish' },
  { id: 'de', title: 'German' },
];

export const baseLanguage = supportedLanguages.find((l) => l.isDefault);