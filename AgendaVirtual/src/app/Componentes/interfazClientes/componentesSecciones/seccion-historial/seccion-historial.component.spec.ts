import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionHistorialComponent } from './seccion-historial.component';

describe('SeccionHistorialComponent', () => {
  let component: SeccionHistorialComponent;
  let fixture: ComponentFixture<SeccionHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
