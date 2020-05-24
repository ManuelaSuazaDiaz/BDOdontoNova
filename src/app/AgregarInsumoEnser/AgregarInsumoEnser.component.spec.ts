import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInsumoEnserComponent } from './AgregarInsumoEnser.component';

describe('AgregarInsumoEnserComponent', () => {
  let component: AgregarInsumoEnserComponent;
  let fixture: ComponentFixture<AgregarInsumoEnserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarInsumoEnserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarInsumoEnserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});