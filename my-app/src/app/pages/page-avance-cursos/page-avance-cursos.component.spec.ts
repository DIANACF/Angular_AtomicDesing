import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAvanceCursosComponent } from './page-avance-cursos.component';

describe('PageAvanceCursosComponent', () => {
  let component: PageAvanceCursosComponent;
  let fixture: ComponentFixture<PageAvanceCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAvanceCursosComponent]
    });
    fixture = TestBed.createComponent(PageAvanceCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
