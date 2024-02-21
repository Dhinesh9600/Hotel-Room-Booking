// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

// const spanStyle = {
//   padding: '20px',
//   background: '#efefef',
//   color: '#000000'
// }

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'cover',
//   height: '700px'
// }
// const slideImages = [
//   {
//     url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
//     caption: 'Luxury Rooms'
//   },
//   {
//     url: 'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=600',
//     caption: 'Family Rooms'
//   },
//   {
//     url: 'https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=600',
//     caption: 'Double Cot'
//   },
//   {
//     url: 'https://images.pexels.com/photos/5461604/pexels-photo-5461604.jpeg?auto=compress&cs=tinysrgb&w=600',
//     caption: 'Premium'
//   },
//   {
//     url: 'https://images.pexels.com/photos/5883728/pexels-photo-5883728.jpeg?auto=compress&cs=tinysrgb&w=600',
//     caption: 'Royal'
//   },
// ];

// const ImageSlider = () => {
//     return (
//       <div className="slide-container">
//         <Slide>
//          {slideImages.map((slideImage, index)=> (
//             <div key={index}>
//               <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
//                 <span style={spanStyle}>{slideImage.caption}</span>
//               </div>
//             </div>
//           ))} 
//         </Slide>
//       </div>
//     )
// }
// export default ImageSlider;

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '700px'
};
const slideImages = [
  {
    url: 'https://wepik.com/api/image/ai/9b0c907b-724d-468d-ae55-a4115d752846', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://wepik.com/api/image/ai/9b0c9254-2b7d-4c00-98cc-e50a5503b741', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://wepik.com/api/image/ai/9b0c90b7-4c5c-42a5-b2ba-0c0df21da3e2', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://www.katakeereehotel.com/src/photos/gallery/villa-phuket-kata-beach-perfect-villa-hd.jpg', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1700', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1200', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://en.idei.club/uploads/posts/2023-03/1679412216_en-idei-club-p-romantic-hotel-room-dizain-instagram-1.jpg?auto=compress&cs=tinysrgb&w=3000', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1200', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=1200', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://images.pexels.com/photos/5461604/pexels-photo-5461604.jpeg?auto=compress&cs=tinysrgb&w=1200', // Adjusted the width parameter to 1200
  },
  {
    url: 'https://images.pexels.com/photos/5883728/pexels-photo-5883728.jpeg?auto=compress&cs=tinysrgb&w=1200', // Adjusted the width parameter to 1200
  },
];
const ImageSlider = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;