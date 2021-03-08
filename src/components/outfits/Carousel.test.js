const React = require('react');
const {shallow, mount} = require('enzyme');
const toJson = require('enzyme-to-json');

const Carousel = require('./Carousel.jsx').default;

describe('Carousel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Carousel />);
  });

  it('should render Carousel with correct class', () => {
    expect(wrapper.find('.carousel')).toBeTruthy();
  });

  it('Carousel Snapshot', () => {
    expect(toJson.default(wrapper)).toMatchSnapshot();
  });
  // to update snapshot, run 'npm test -- -u' in terminal

});

describe('Outfits Carousel', () => {
  it('should fire function addToOutfit when outfit card is clicked', () => {
    let mockAddToOutfit = jest.fn();
    let wrapper = mount(<Carousel outfits={true} addToOutfit={mockAddToOutfit} currentProduct={{id: 'test'}}/>);

    expect(wrapper.find('#outfits-add')).toBeTruthy();
    expect(wrapper.find('.outfits')).toBeTruthy();
    wrapper.find('#outfits-add').simulate('click');
    expect(mockAddToOutfit.mock.calls.length).toBe(1);
  });

});