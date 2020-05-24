import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCitaComponent } from './AgregarCita.component';

describe('AgregarCitaComponent', () => {
  let component: AgregarCitaComponent;
  let fixture: ComponentFixture<AgregarCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});