import Redux from 'redux';

var setGalleryIndexReducer = (state=0, action) => {
  if (action.type === 'SET_GALLERY_INDEX') {
    return action.payload || 0
  } else {
  return state;
  }
};


export default setGalleryIndexReducer;