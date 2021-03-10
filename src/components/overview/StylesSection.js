import React, {useState, useEffect, Fragment} from 'react';



let StylesSection = ({product, currentStyle, styles, changeCurrentStyle, changeIndex, setQuantity}) => {


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
    setQuantity([]);
    document.getElementById("select-size-dropdown").value = 0;
    changeIndex(0);
  }

  return(
  <Fragment>
    {styles.map((style, i) => {
      if (style.style_id === currentStyle.style_id) {
        return (
          <div key={i}>
          <label onClick={handleClick} htmlFor={style.style_id } name={style.style_id } >
            <input type="checkbox" id={style.style_id } defaultChecked='true' checked/>
            <img  name={style.style_id} key={i} className='individual-styles' alt={product.name + style.name}  src= {style?.photos[0].thumbnail_url} />
            </label>
          </div>
        )
      }
        return (
          <div key={i}>
          <label onClick={handleClick} htmlFor={style.style_id } name={style.style_id } >
          <input type="checkbox" id={style.style_id } />
          <img  name={style.style_id } key={i} className='individual-styles' alt={product.name + style.name }  src= {style.photos[0].thumbnail_url } />
          </label>
          </div>
        )
    })
    }
  </Fragment>
  )
}


export default StylesSection;