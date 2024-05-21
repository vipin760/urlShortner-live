import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlAnalalyticsComponent } from './url-analalytics.component';

describe('UrlAnalalyticsComponent', () => {
  let component: UrlAnalalyticsComponent;
  let fixture: ComponentFixture<UrlAnalalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlAnalalyticsComponent]
    });
    fixture = TestBed.createComponent(UrlAnalalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
