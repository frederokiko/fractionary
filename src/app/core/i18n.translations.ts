// src/app/core/i18n.translations.ts
export type Lang = 'fr' | 'en';

export const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.bird1': 'Oiseau 1',
    'nav.bird2': 'Oiseau 2',
    'nav.cat1': 'Chat 1',
    'nav.cat2': 'Chat 2',
    'game.win': 'Bravo !',
    'game.win1': 'Félicitations, tu as réussi !',
    'game.win2': 'Super travail, tu as tout complété !',
  },

  en: {
    'nav.home': 'Home',
    'nav.bird1': 'Bird 1',
    'nav.bird2': 'Bird 2',
    'nav.cat1': 'Cat 1',
    'nav.cat2': 'Cat 2',
    'game.win': 'Well done!',
    'game.win1': 'Congratulations, you did it!',
    'game.win2': 'Great job, you completed everything!',
    
  },
};
