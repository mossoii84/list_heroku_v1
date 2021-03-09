import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Lift1Component } from './lift1/lift1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AgGridTable1Component } from './ag-grid-table1/ag-grid-table1.component';
import { PovorotImageComponent } from './povorot-image/povorot-image.component';
import { ImageFormatterComponent } from './image-formatter/image-formatter.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateComponent } from './translate/translate.component';
import {AgGridModule} from 'ag-grid-angular';
import {AppRoutingModule} from './app-routing.module';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Lift1Component,
    AgGridTable1Component,
    PovorotImageComponent,
    TranslateComponent,
    ImageFormatterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    AgGridModule.withComponents([ImageFormatterComponent]),


    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
