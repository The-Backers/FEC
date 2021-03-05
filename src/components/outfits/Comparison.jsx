import React from 'react';

const Comparison = ({product, currentProduct}) => { // needs the product and the current product!
  return (
    <table>
      <tbody>
        <tr>
          <th>{product.name}</th>
          <th>&nbsp;</th>
          <th>{currentProduct.name}</th>
        </tr>
        {/* map the features! */}
      </tbody>
    </table>
  );
}

export default Comparison;