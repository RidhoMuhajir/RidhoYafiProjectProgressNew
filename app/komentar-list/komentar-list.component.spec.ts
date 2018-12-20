import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentarListComponent } from './komentar-list.component';

describe('KomentarListComponent', () => {
  let component: KomentarListComponent;
  let fixture: ComponentFixture<KomentarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
