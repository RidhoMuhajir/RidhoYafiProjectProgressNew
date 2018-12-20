/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KostEditComponent } from './kost-edit.component';

describe('KostEditComponent', () => {
  let component: KostEditComponent;
  let fixture: ComponentFixture<KostEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
