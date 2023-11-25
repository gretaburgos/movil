import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OjosPage } from './ojos.page';

describe('OjosPage', () => {
  let component: OjosPage;
  let fixture: ComponentFixture<OjosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OjosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
