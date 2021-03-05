import React from 'react';


const ReviewRatingsBar = ({ratings, value, width}) => {

console.log(width)




// return (
//      <div className = 'outer-bar' >
//         {
//       (() => {
//         if (total !== undefined) {
//           console.log(ratings, value, total)
//         return (<div className = 'fill' style ={{width: widthFinder()}}></div>)
//           }
//         })()
//       }

//       </div>
// )

  return (<div className = 'outer-bar'>
            <div className = 'fill' style ={{width: width}}></div>
           </div>
           )




}





export default ReviewRatingsBar;