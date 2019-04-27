export class LanguagesService {
  getLanguages() {
    return [
      {
        code: 'en',
        label: 'English',
        flagUrl: '../assets/en.svg',
        alt: 'British flag'
      },
      {
        code: 'da',
        label: 'Dansk',
        flagUrl: '../assets/da.svg',
        alt: 'Danish flag'
      },
      {
        code: 'de',
        label: 'Deutch',
        flagUrl: '../assets/de.svg',
        alt: 'German flag'
      },
      {
        code: 'pl',
        label: 'Polski',
        flagUrl: '../assets/pl.svg',
        alt: 'Polish flag'
      },
      {
        code: 'ro',
        label: 'Românesc',
        flagUrl: '../assets/ro.svg',
        alt: 'Romanian flag'
      },
      {
        code: 'bg',
        label: 'български',
        flagUrl: '../assets/bg.svg',
        alt: 'Bulgarian flag'
      }
    ];
  }
}
