import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTratamientosComponent } from './ListaTratamientos.component';

describe('ListaTratamientosComponent', () => {
  let component: ListaTratamientosComponent;
  let fixture: ComponentFixture<ListaTratamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTratamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
