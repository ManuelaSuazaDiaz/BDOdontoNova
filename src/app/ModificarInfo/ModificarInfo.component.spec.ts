import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarInfoComponent } from './ModificarInfo.component';

describe('ModificarInfoComponent', () => {
  let component: ModificarInfoComponent;
  let fixture: ComponentFixture<ModificarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
