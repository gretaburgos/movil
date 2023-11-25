import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomemakeupPage } from './homemakeup.page';

describe('HomemakeupPage', () => {
  let component: HomemakeupPage;
  let fixture: ComponentFixture<HomemakeupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomemakeupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
