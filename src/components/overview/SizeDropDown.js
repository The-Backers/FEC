import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import logInteraction from '../shared/logInteraction.js';


let SizeDropDown = ({quantity, setQuantity, product, selectedSku, setSku, skus, fetchOutfit, checkedOut}) => {

  useEffect(() => {
    getSelectedSku()
  },[selectedSku])


  function checkOut(e) {
    e.preventDefault();
    checkedOut();
  }

  function getSelectedSku() {
    var e = document.getElementById("select-size-dropdown");
    var dropValue = e.value;
    setQuantity([]);
    if (dropValue !== undefined) {
      setSku(dropValue);
    }
    if(selectedSku !== undefined) {
      let newQuantity = [];
      skus.map((sku) => {
        if (sku.sku === selectedSku) {
          for(var i = 1; i <= sku.quantity; i++) {
            newQuantity.push(i)
          }
        }
      })
      setQuantity(newQuantity)
    }
  }

  return(
  <form onSubmit={(e) => checkOut(e)}>
    <select onChange={getSelectedSku} id='select-size-dropdown'>
      <option value={0} default>SELECT SIZE</option>
      {skus.map((sku, i) => {
        return (<option  value={sku.sku} key={sku.sku}>{sku.size}</option>)
      })}
    </select>

    {selectedSku > 0 ? <select id='select-quantity-dropdown'>
      {quantity.map((num, i) => {
        if ( i < 15) {
          return (
          <option key={i} value={num}>{num}</option>
          )
        }
      })}
    </select> :  <select id='select-quantity-dropdown' disabled={true}> <option default value='-'>-</option> </select>}
    <div className='star-add-to-bag-div'>
            <button type='submit' className='add-to-bag'> ADD TO BAG <i className="fas fa-plus"></i> </button>
            <button type="button" onClick={() => fetchOutfit(product.id)}  className='heart-product'> <i  className="far fa-heart"> </i> </button>
    </div>

  </form>
  )
}


export default SizeDropDown;