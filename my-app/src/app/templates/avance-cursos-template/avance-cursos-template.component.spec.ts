import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceCursosTemplateComponent } from './avance-cursos-template.component';

describe('AvanceCursosTemplateComponent', () => {
  let component: AvanceCursosTemplateComponent;
  let fixture: ComponentFixture<AvanceCursosTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvanceCursosTemplateComponent]
    });
    fixture = TestBed.createComponent(AvanceCursosTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
