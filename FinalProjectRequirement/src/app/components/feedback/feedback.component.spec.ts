import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackComponent } from './feedback.component';

describe('FeedBackComponent', () => {
  let component: FeedBackComponent;
  let fixture: ComponentFixture<FeedBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedBackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});