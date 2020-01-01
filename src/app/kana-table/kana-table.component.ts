import { Component, OnInit } from '@angular/core';
import { KanaTableService } from './kana-table.service';

@Component({
  selector: 'app-kana-table',
  templateUrl: './kana-table.component.html',
  styleUrls: ['./kana-table.component.css']
})
export class KanaTableComponent implements OnInit {
  kana;
  console = window.console;
  Object = Object;

  showHiragana = true;
  showKatakana = true;
  showRomaji = false;

  constructor(
    private kanaTableService: KanaTableService
  ) { }

  ngOnInit() {
    this.kana = this.kanaTableService.getKanaData();
  }
}
