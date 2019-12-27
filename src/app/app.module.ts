import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { VocabComponent } from './vocab/vocab.component';
import { KanaTableComponent } from './kana-table/kana-table.component';


@NgModule({
   declarations: [
      AppComponent,
      TopNavComponent,
      HomeComponent,
      VocabComponent,
      KanaTableComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
