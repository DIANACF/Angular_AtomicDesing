import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceCursoParrComponent } from './avance-curso-parr.component';

describe('AvanceCursoParrComponent', () => {
  let component: AvanceCursoParrComponent;
  let fixture: ComponentFixture<AvanceCursoParrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvanceCursoParrComponent]
    });
    fixture = TestBed.createComponent(AvanceCursoParrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
