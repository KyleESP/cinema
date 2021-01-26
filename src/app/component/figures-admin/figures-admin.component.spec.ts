import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguresAdminComponent } from './figures-admin.component';

describe('FiguresAdminComponent', () => {
  let component: FiguresAdminComponent;
  let fixture: ComponentFixture<FiguresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguresAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiguresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
