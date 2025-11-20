// src/app/core/i18n.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lang, TRANSLATIONS } from './i18n.translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private _lang: Lang = (localStorage.getItem('lang') as Lang) || 'fr';
  private langSubject = new BehaviorSubject<Lang>(this._lang);
  lang$ = this.langSubject.asObservable();

  get lang(): Lang {
    return this._lang;
  }

  setLang(lang: Lang) {
    this._lang = lang;
    this.langSubject.next(lang);
    localStorage.setItem('lang', lang);
  }

  t(key: string): string {
    return TRANSLATIONS[this._lang][key] ?? key;
  }
}
