import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTituloComponent } from './curso-titulo.component';

describe('CursoTituloComponent', () => {
  let component: CursoTituloComponent;
  let fixture: ComponentFixture<CursoTituloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoTituloComponent]
    });
    fixture = TestBed.createComponent(CursoTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
