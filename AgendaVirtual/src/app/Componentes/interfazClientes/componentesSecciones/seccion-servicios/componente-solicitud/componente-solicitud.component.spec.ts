import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSolicitudComponent } from './componente-solicitud.component';

describe('ComponenteSolicitudComponent', () => {
  let component: ComponenteSolicitudComponent;
  let fixture: ComponentFixture<ComponenteSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
