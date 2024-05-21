import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnshortUrlComponent } from './unshort-url.component';

describe('UnshortUrlComponent', () => {
  let component: UnshortUrlComponent;
  let fixture: ComponentFixture<UnshortUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnshortUrlComponent]
    });
    fixture = TestBed.createComponent(UnshortUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
