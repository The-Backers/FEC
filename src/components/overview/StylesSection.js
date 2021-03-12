import React, {useState, Fragment} from 'react';
import logInteraction from '../shared/logInteraction.js';



let StylesSection = ({product, currentStyle, styles, changeCurrentStyle, changeIndex}) => {

  function handleClick(e) {
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) {
      clist[i].checked = false;
    }

    for(var i = 0; i < styles?.length; i++) {
      if (Number(e.target.name) === styles[i]?.style_id) {
        changeCurrentStyle(styles[i] || {});
      }
    }
    changeIndex(0);
    logInteraction(`selected Style: ${product.name}-${e.target.name}`, 'product-overview')
  }

  return(
  <Fragment>
    {styles.map((style, i) => {
      if (style.style_id === currentStyle.style_id) {
        return (
          <div key={i}>
          <label onClick={(e) => handleClick(e)} htmlFor={style.style_id } name={style.style_id } >
            <input type="checkbox" id={style.style_id }  checked/>
            <img   width={200} height={400} name={style.style_id} key={i} className='individual-styles' alt={product.name + style.name}  src= {style?.photos[0].thumbnail_url} />
          </label>
          </div>
        )
      }
        return (
          <div key={i}>
          <label onClick={(e) => handleClick(e)} htmlFor={style.style_id } name={style.style_id } >
          <input type="checkbox" id={style.style_id } />
            <img  width={200} height={400} name={style.style_id } key={i} className='individual-styles' alt={product.name + style.name }  src= {style.photos[0].thumbnail_url } />
          </label>
          </div>
        )
    })
    }
  </Fragment>
  )
}


export default StylesSection;