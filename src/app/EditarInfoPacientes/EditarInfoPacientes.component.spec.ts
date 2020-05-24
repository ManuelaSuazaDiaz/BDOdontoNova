import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfoPacientesComponent } from './EditarInfoPacientes.component';

describe('AgregarPacienteComponent', () => {
  let component: EditarInfoPacientesComponent;
  let fixture: ComponentFixture<EditarInfoPacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInfoPacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInfoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});