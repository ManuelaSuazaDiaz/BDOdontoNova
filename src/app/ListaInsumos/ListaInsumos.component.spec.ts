import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInsumosComponent } from './ListaInsumos.component';

describe('ListaInsumosComponent  ', () => {
  let component: ListaInsumosComponent  ;
  let fixture: ComponentFixture<ListaInsumosComponent  >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInsumosComponent   ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInsumosComponent  );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
