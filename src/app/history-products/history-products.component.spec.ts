import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryProductsComponent } from './history-products.component';

describe('HistoryProductsComponent', () => {
  let component: HistoryProductsComponent;
  let fixture: ComponentFixture<HistoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
