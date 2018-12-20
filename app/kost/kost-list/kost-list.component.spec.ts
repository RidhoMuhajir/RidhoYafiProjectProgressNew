/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KostListComponent } from './kost-list.component';

describe('KostListComponent', () => {
  let component: KostListComponent;
  let fixture: ComponentFixture<KostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
