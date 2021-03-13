import React from 'react';


let SocialMediaIcons = () => (
  <div className='social-media-icons'>

    <div>SHARE</div>

    <a name='twitter share' href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false"><img width={20} height={20} src="../../../images/twitter.png" alt='twitter icon' target="_blank"/></a><script src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

    <div className="fb-share-button"  data-layout="button" data-size="large"><a target="_blank" rel='noreferrer' href={`https://www.facebook.com/sharer.php?u=${encodeURI(document.location.href)}`} className="fb-xfbml-parse-ignore">Share</a></div>

    <div className='pinterest'>  <a  data-pin-tall='true' data-pin-do="buttonBookmark" data-pin-round="false" href="https://www.pinterest.com/pin/create/button/"><img width={20} height={20} src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_16.png" alt='pinterest icon' target="_blank"/></a></div>



</div>)


export default SocialMediaIcons;