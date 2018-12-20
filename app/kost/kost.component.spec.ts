import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KostComponent } from './Kost.component';

describe('KostComponent', () => {
  let component: KostComponent;
  let fixture: ComponentFixture<KostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
