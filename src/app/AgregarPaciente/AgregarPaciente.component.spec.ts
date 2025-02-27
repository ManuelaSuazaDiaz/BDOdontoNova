import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPacienteComponent } from './AgregarPaciente.component';

describe('AgregarPacienteComponent', () => {
  let component: AgregarPacienteComponent;
  let fixture: ComponentFixture<AgregarPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});