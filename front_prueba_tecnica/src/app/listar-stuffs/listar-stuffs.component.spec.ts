import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarStuffsComponent } from './listar-stuffs.component';

describe('ListarStuffsComponent', () => {
  let component: ListarStuffsComponent;
  let fixture: ComponentFixture<ListarStuffsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarStuffsComponent]
    });
    fixture = TestBed.createComponent(ListarStuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
