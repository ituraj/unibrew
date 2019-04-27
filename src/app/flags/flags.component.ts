import { Component } from '@angular/core';
import { LanguagesService } from '../languages.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css'],
  providers: [LanguagesService]
})
export class FlagsComponent {
  languages;

  constructor(
    public translate: TranslateService,
    languagesService: LanguagesService
  ) {
    this.languages = languagesService.getLanguages();
    translate.addLangs(['en', 'dk', 'de', 'pl', 'ro', 'bg']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|dk|de|pl|ro|bg/) ? browserLang : 'en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
