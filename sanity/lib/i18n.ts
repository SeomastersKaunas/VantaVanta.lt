// Define the languages you want to support
export const supportedLanguages = [
  {id: 'lt', title: 'Lithuanian', isDefault: true},
  {id: 'en', title: 'English'},
]

// Get the base language for document-level translations
export const baseLanguage = supportedLanguages.find(l => l.isDefault)