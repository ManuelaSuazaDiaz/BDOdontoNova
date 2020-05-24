import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarInfoInsumosComponent } from './ModificarInfoInsumos.component';

describe('ModificarInfoInsumosComponent ', () => {
  let component: ModificarInfoInsumosComponent ;
  let fixture: ComponentFixture<ModificarInfoInsumosComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarInfoInsumosComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarInfoInsumosComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
