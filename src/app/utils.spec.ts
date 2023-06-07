import { Utils } from './utils';

describe('Utils', () => {
  it('should create an instance', () => {
    expect(new Utils()).toBeTruthy();
  });

  it('should not equal original object and cloned object', () => {
    const original = {
      foo: 1, bar: 2,
    }
    
    expect(original === Utils.clone(original)).toBeTrue();
  })
});
