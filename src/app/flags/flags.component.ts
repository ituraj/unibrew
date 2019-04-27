import { Component } from '@angular/core';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css'],
  providers: [LanguagesService]
})
export class FlagsComponent {
  languages;

  constructor(languagesService: LanguagesService) {
    this.languages = languagesService.getLanguages();
  }
}
