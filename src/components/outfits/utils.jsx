import React from 'react';
const getFeatures = (product, currentProduct) => {
  const features = new Set();
  for (let item of product) {
    features.add(item.feature);
  }
  for (let item of currentProduct) {
    features.add(item.feature);
  }

  var result = [];

  for (let feature of features) {
    let obj = {};
    obj.feature = feature;
    for (let item of product) {
      if (item.feature === feature) {
        if (item.value) {
          obj.product = item.value;
        } else {
          obj.product = <i className="fas fa-check"></i>;
        }
      }
    }
    if (!obj.product) {
      obj.product = null;
    }
    for (let item of currentProduct) {
      if (item.feature === feature) {
        if (item.value) {
          obj.currentProduct = item.value;
        } else {
          obj.currentProduct = <i className="fas fa-check"></i>;
        }
      }
    }
    if (!obj.currentProduct) {
      obj.currentProduct = null;
    }
    result.push(obj);
  }
 return result;
}

export default getFeatures;