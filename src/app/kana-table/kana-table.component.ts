import { Component, OnInit } from '@angular/core';
import { KanaTableService } from './kana-table.service';

@Component({
  selector: 'app-kana-table',
  templateUrl: './kana-table.component.html',
  styleUrls: ['./kana-table.component.css']
})
export class KanaTableComponent implements OnInit {
  kana = {};
  keys = [];
  console = window.console;
  Object = Object;

  constructor(
    private kanaTableService: KanaTableService
  ) { }

  ngOnInit() {
    this.kana = this.kanaTableService.getKanaData();
    this.keys = Object.keys(this.kana);
    console.log(this.kana);
    console.log(this.keys);
  }
}
