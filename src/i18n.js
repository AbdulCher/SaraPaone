import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        accueil: 'Accueil',
        biographie: 'Biographie',
        contact: 'Contacter Sara Paone',
        // etc...
      }
    },
    en: {
      translation: {
        accueil: 'Home',
        biographie: 'Biography',
        contact: 'Contact Sara Paone',
        // etc...
      }
    },
    it: {
      translation: {
        accueil: 'Accueil',
        biographie: 'Biografia',
        contact: 'Contattare Sara Paone',
        // etc...
      }
    }
  },
  lng: 'fr',
  fallbackLng: 'fr',
})

export default i18n