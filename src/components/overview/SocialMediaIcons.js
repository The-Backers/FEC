import React from 'react';


let SocialMediaIcons = () => (
  <div className='social-media-icons'>

  <div>SHARE</div>
  <a name='twitter share' href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">twitter</a><script src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>


    <div className="fb-share-button" data-href={window.location} data-layout="button"  data-size="large"><img width={20} height={20} className="fab fa-facebook-square" src={`https://www.facebook.com/sharer/sharer.php?u=${window.location}`} alt='facebook logo' ></img></div>

    <div target="_blank" className='pinterest'>  <a  data-pin-tall='true' data-pin-do="buttonBookmark" data-pin-round="false" href="https://www.pinterest.com/pin/create/button/"><img width={20} height={20} src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_16.png" alt='pinterest icon' target="_blank"/></a></div>



</div>)


export default SocialMediaIcons;