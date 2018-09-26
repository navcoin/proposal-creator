import { PiModule } from './pi.module';

describe('PiModule', () => {
  let piModule: PiModule;

  beforeEach(() => {
    piModule = new PiModule();
  });

  it('should create an instance', () => {
    expect(piModule).toBeTruthy();
  });
});
