import React, {useState, useEffect} from 'react';


let Nav = ({product, fetchProduct, changeView, currentView}) => {

  useEffect(() => {
    console.log(currentView)
    console.log(changeView)
  })
  const [productQuery, setProductQuery] = useState('');
  const onChange = (e) => setProductQuery(event.target.value);

  function changeProduct(e) {
    e.preventDefault();
    if (productQuery !== false && isNaN(Number(productQuery)) === false) {
      fetchProduct(productQuery)
    }
  }


  return(
    <nav className='nav'>
      <div onClick={() =>changeView(!currentView)} className='logo'>B<p className="fas fa-angle-double-up"></p>CKERS</div>
      <form id='search-form' onSubmit={(e) => changeProduct(e)}>
      <input placeholder='PRODUCT #' className='prod-search' name='product' value={productQuery} onChange={onChange}></input>
      <button id='search-form-btn'  form='search-form' type='submit'><i className="fas fa-search"></i> </button>
      </form>
    </nav>
  )
}

export default Nav;