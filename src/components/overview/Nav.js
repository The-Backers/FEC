import React, {useState} from 'react';


let Nav = ({product, fetchProduct, changeView, currentView}) => {


  const [productQuery, setProductQuery] = useState('');
  const onChange = (e) => setProductQuery(event.target.value);

  function changeProduct(e) {
    e.preventDefault();
    if (productQuery !== false && isNaN(Number(productQuery)) === false) {
      fetchProduct(productQuery);
    }
    setProductQuery('');
  }


  return(
    <nav className='nav'>
      <div onClick={() =>changeView(!currentView)} className='logo'>B<p className="fas fa-angle-double-up"></p>CKERS</div>
      <form id='search-form' onSubmit={(e) => changeProduct(e)}>
      <input placeholder='PRODUCT #' aria-label="product search" className='prod-search' name='product' value={productQuery} onChange={onChange}></input>
      <button aria-label="search for product" id='search-form-btn'  form='search-form' type='submit'><i className="fas fa-search"></i> </button>
      </form>
    </nav>
  )
}

export default Nav;