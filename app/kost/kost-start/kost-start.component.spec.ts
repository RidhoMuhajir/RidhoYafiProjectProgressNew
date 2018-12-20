/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KostStartComponent } from './kost-start.component';

describe('KostStartComponent', () => {
  let component: KostStartComponent;
  let fixture: ComponentFixture<KostStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
