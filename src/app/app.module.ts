import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { VocabComponent } from './vocab/vocab.component';
import { KanaTableComponent } from './kana-table/kana-table.component';
import { NgVarModule } from './ng-var/ng-var.module';


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
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      NgVarModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
