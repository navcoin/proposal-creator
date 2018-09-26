import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotePaymentRequestComponent } from './vote-payment-request.component';

describe('CreatePaymentRequestComponent', () => {
  let component: VotePaymentRequestComponent;
  let fixture: ComponentFixture<VotePaymentRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotePaymentRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotePaymentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
