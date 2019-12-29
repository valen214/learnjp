import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VocabComponent } from './vocab/vocab.component';
import { KanaTableComponent } from './kana-table/kana-table.component';


const routes: Routes = [{
    path: "home/:urlParam",
    component: HomeComponent,
  }, {
    path: "vocab",
    component: VocabComponent,
  }, {
    path: "kana_table",
    component: KanaTableComponent,
  }, {
    path: "**",
    component: HomeComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
