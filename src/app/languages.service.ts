export class LanguagesService {
  getLanguages() {
    return [
      {
        code: 'en',
        label: 'English',
        flagUrl: '../assets/svg/en.svg',
        alt: 'British flag'
      },
      {
        code: 'dk',
        label: 'Dansk',
        flagUrl: '../assets/svg/da.svg',
        alt: 'Danish flag'
      },
      {
        code: 'de',
        label: 'Deutch',
        flagUrl: '../assets/svg/de.svg',
        alt: 'German flag'
      },
      {
        code: 'pl',
        label: 'Polski',
        flagUrl: '../assets/svg/pl.svg',
        alt: 'Polish flag'
      },
      {
        code: 'ro',
        label: 'Românesc',
        flagUrl: '../assets/svg/ro.svg',
        alt: 'Romanian flag'
      },
      {
        code: 'bg',
        label: 'български',
        flagUrl: '../assets/svg/bg.svg',
        alt: 'Bulgarian flag'
      }
    ];
  }
}
