import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionServiciosComponent } from './seccion-servicios.component';

describe('SeccionServiciosComponent', () => {
  let component: SeccionServiciosComponent;
  let fixture: ComponentFixture<SeccionServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
