import React from 'react';


let Gallery = () => {
  // local state controlled by hooks to hide default view and expand overview-body-image
  return (
    <div  className='overview-body'>
      <div className='overview-body-image'>
        <img></img>
      </div>
      <div className='overview-body-interaction default'>
        <h3> name goes here</h3>
        <button>demo button</button>
      </div>
    </div>

  )
}



export default Gallery;