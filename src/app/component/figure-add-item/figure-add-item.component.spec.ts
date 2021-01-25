import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureAddItemComponent } from './figure-add-item.component';

describe('FigureAddItemComponent', () => {
  let component: FigureAddItemComponent;
  let fixture: ComponentFixture<FigureAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
