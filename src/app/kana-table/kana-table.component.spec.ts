/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KanaTableComponent } from './kana-table.component';

describe('KanaTableComponent', () => {
  let component: KanaTableComponent;
  let fixture: ComponentFixture<KanaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
