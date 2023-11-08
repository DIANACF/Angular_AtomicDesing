import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoParrafoComponent } from './curso-parrafo.component';

describe('CursoParrafoComponent', () => {
  let component: CursoParrafoComponent;
  let fixture: ComponentFixture<CursoParrafoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoParrafoComponent]
    });
    fixture = TestBed.createComponent(CursoParrafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
