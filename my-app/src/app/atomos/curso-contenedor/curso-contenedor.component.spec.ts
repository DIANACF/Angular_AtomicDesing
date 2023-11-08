import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoContenedorComponent } from './curso-contenedor.component';

describe('CursoContenedorComponent', () => {
  let component: CursoContenedorComponent;
  let fixture: ComponentFixture<CursoContenedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoContenedorComponent]
    });
    fixture = TestBed.createComponent(CursoContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
