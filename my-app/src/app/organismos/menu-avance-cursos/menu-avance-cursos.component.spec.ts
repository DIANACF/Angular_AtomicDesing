import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAvanceCursosComponent } from './menu-avance-cursos.component';

describe('MenuAvanceCursosComponent', () => {
  let component: MenuAvanceCursosComponent;
  let fixture: ComponentFixture<MenuAvanceCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAvanceCursosComponent]
    });
    fixture = TestBed.createComponent(MenuAvanceCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
