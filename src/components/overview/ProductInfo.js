import React, {Fragment} from 'react';

let ProductInfo = ({product, currentStyle}) => {
return (
  <Fragment>
    <p>{product.category }</p>
    <h2>{product.name }</h2>
    {currentStyle.sale_price ?
    <div style={{color: 'red'}}>${currentStyle.sale_price }<p style={{textDecoration: 'line-through', color: 'black'}}>${currentStyle.original_price }</p></div> :
    <p>${currentStyle.original_price }</p>}
    <p><strong>{currentStyle.name } {`>`}</strong> Selected Style</p>
  </Fragment>
)

}

export default ProductInfo;