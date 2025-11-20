import { Component } from '@angular/core';
import { I18nService } from './core/i18n.service';
import { Lang } from './core/i18n.translations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  constructor(public i18n: I18nService) {}

  setLang(lang: Lang) {
    this.i18n.setLang(lang);
  }

  get currentLang(): Lang {
    return this.i18n.lang;
  }
}

