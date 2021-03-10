import removeOutfit from './removeOutfit.js';

describe('removeOutfit', () => {
  it('should create an action to remove product', () => {
    const index = 0;
    const expected = {
      type: 'REMOVE_OUTFIT',
      index: index
    }
    expect(removeOutfit()).toEqual(expected);
  })
})