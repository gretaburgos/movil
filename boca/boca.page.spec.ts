import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BocaPage } from './boca.page';

describe('BocaPage', () => {
  let component: BocaPage;
  let fixture: ComponentFixture<BocaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BocaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
