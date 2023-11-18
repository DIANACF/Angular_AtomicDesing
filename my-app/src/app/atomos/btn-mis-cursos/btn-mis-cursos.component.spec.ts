import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMisCursosComponent } from './btn-mis-cursos.component';

describe('BtnMisCursosComponent', () => {
  let component: BtnMisCursosComponent;
  let fixture: ComponentFixture<BtnMisCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnMisCursosComponent]
    });
    fixture = TestBed.createComponent(BtnMisCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
