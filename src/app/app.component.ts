import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kotversion1';
  info: any;

  // это встроенный класс TranslateService
  constructor(public translate: TranslateService) {
    // Выбор языка
    translate.addLangs(['fr', 'bg', 'rus']);
    translate.setDefaultLang('fr');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {}


}
