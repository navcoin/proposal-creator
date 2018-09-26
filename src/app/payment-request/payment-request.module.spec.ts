import { PaymentRequestModule } from './payment-request.module';

describe('PaymentRequestModule', () => {
  let PaymentRequestModule: PaymentRequestModule;

  beforeEach(() => {
    PaymentRequestModule = new PaymentRequestModule();
  });

  it('should create an instance', () => {
    expect(PaymentRequestModule).toBeTruthy();
  });
});
