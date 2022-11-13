import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionOpcionesComponent } from './seccion-opciones.component';

describe('SeccionOpcionesComponent', () => {
  let component: SeccionOpcionesComponent;
  let fixture: ComponentFixture<SeccionOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionOpcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
