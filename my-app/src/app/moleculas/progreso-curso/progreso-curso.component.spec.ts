import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresoCursoComponent } from './progreso-curso.component';

describe('ProgresoCursoComponent', () => {
  let component: ProgresoCursoComponent;
  let fixture: ComponentFixture<ProgresoCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgresoCursoComponent]
    });
    fixture = TestBed.createComponent(ProgresoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
