import { SumWithServicePipe } from './sum-with-service.pipe';

describe('SumWithServicePipe', () => {
  it('create an instance', () => {
    const pipe = new SumWithServicePipe();
    expect(pipe).toBeTruthy();
  });
});
