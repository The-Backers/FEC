import showRelated from './showRelated.js';

describe('showRelated', () => {
  it('should create an action with a related product', () => {
    const product = {id: 'test', name: 'testing'};
    const expected = {
      type: 'SHOW_RELATED',
      relatedProducts: product
    }
    expect(showRelated(product)).toEqual(expected);
  })
})