import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarStuffsComponent } from './editar-stuffs.component';

describe('EditarStuffsComponent', () => {
  let component: EditarStuffsComponent;
  let fixture: ComponentFixture<EditarStuffsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarStuffsComponent]
    });
    fixture = TestBed.createComponent(EditarStuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
