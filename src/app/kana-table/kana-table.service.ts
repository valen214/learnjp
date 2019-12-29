
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KanaTableService {
  kana = {};
  constructor(
    private http: HttpClient
  ) {}

  getKanaData(){
    let kana = this.http.get("./assets/kana.json", {
      responseType: "json"
    });
    console.log(kana);
    return kana;
  }
}