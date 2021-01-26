import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureUpdateItemComponent } from './figure-update-item.component';

describe('FigureUpdateItemComponent', () => {
  let component: FigureUpdateItemComponent;
  let fixture: ComponentFixture<FigureUpdateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureUpdateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
