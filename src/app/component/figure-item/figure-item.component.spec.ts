import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureItemComponent } from './figure-item.component';

describe('FigureItemComponent', () => {
  let component: FigureItemComponent;
  let fixture: ComponentFixture<FigureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
