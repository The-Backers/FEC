import React from 'react';

//Since we are using redux, all components should be functional.
//Remember to follow naming convention and capitilize our comoponents.
var Product = ({style, handleStyleChange}) => (

<div>
  {console.log('this is the current product: ',style)}
  <h2>{style.name}</h2>
  <h2>{style.original_price}</h2>
  <img src={style.photos[1].url} alt='pic of a thingy' />
  <button onClick={handleStyleChange}>change style</button>
</div>
);




// export default Product;