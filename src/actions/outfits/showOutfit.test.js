import showOutfit from './showOutfit.js';

describe('showOutfit', () => {
  it('should create an action with a product', () => {
    const product = {id: 'test', name: 'testing'};
    const expected = {
      type: 'SHOW_OUTFIT',
      outfits: product
    }
    expect(showOutfit(product)).toEqual(expected);
  })
})