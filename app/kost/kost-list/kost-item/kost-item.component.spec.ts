import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KostItemComponent } from './kost-item.component';

describe('KostItemComponent', () => {
  let component: KostItemComponent;
  let fixture: ComponentFixture<KostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
