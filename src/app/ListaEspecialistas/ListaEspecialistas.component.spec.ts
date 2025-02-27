import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspecialistasComponent } from './ListaEspecialistas.component';

describe('ListaEspecialistasComponent', () => {
  let component: ListaEspecialistasComponent;
  let fixture: ComponentFixture<ListaEspecialistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEspecialistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
