import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['rus', 'fr']);
    translate.setDefaultLang('rus');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/rus|fr/) ? browserLang : 'rus');
  }

  // вариант 2
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
  }

}

