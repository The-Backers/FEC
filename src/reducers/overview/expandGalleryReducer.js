import Redux from 'redux';


var expandGalleryReducer = (state=null, action) => {
  if (action.type === 'EXPAND_GALLERY') {
    return action.payload

  } else {
    return state;
  }
};

export default expandGalleryReducer;