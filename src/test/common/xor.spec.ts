import xor from '../../utils/common/xor';

describe('Api basic use cases', () => {
  it('true true = false', async () => {
    expect(xor(true, true)).toBe(false);
  });

  it('true false = true', async () => {
    expect(xor(true, false)).toBe(true);
  });

  it('false true = true', async () => {
    expect(xor(false, true)).toBe(true);
  });

  it('false false = false', async () => {
    expect(xor(false, false)).toBe(false);
  });
});
