// import React from "react";
// import PropTypes from  "prop-types";

// function Gallery(props) {
//   return (
//     <section className="text-gray-400 bg-gray-900 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-col text-center w-full mb-20">
//           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
//             BM HOTEL
//           </h1>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

//           Explore our hotel room gallery for a visual journey through our luxurious accommodations. Discover elegantly designed rooms, breathtaking views, and modern amenities that await you. Immerse yourself in the essence of comfort and style before booking your unforgettable stay.
//           </p>
//         </div>
//         <div className="flex flex-wrap -m-4">
//           <div className="lg:w-1/3 sm:w-1/2 p-4">
//             <div className="flex relative">
//               <img
//                 alt="gallery"
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//                 src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               />
//               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                 <h2 className={`tracking-widest text-sm title-font font-medium text-${props.theme}-400 mb-1`}>
//                   THE SUBTITLE
//                 </h2>
//                 <h1 className="title-font text-lg font-medium text-white mb-3">
//                   Shooting Stars
//                 </h1>
//                 <p className="leading-relaxed">
//                   Photo booth fam kinfolk cold-pressed sriracha leggings
//                   jianbing microdosing tousled waistcoat.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/3 sm:w-1/2 p-4">
//             <div className="flex relative">
//               <img
//                 alt="gallery"
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//                 src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/601x361"
//               />
//               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                 <h2 className={`tracking-widest text-sm title-font font-medium text-${props.theme}-400 mb-1`}>
//                   THE SUBTITLE
//                 </h2>
//                 <h1 className="title-font text-lg font-medium text-white mb-3">
//                   The Catalyzer
//                 </h1>
//                 <p className="leading-relaxed">
//                   Photo booth fam kinfolk cold-pressed sriracha leggings
//                   jianbing microdosing tousled waistcoat.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/3 sm:w-1/2 p-4">
//             <div className="flex relative">
//               <img
//                 alt="gallery"
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//                 src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               />
//               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                 <h2 className={`tracking-widest text-sm title-font font-medium text-${props.theme}-400 mb-1`}>
//                   THE SUBTITLE
//                 </h2>
//                 <h1 className="title-font text-lg font-medium text-white mb-3">
//                   The 400 Blows
//                 </h1>
//                 <p className="leading-relaxed">
//                   Photo booth fam kinfolk cold-pressed sriracha leggings
//                   jianbing microdosing tousled waistcoat.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/3 sm:w-1/2 p-4">
//             <div className="flex relative">
//               <img
//                 alt="gallery"
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//                 src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               />
//               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                 <h2 className={`tracking-widest text-sm title-font font-medium text-${props.theme}-400 mb-1`}>
//                   THE SUBTITLE
//                 </h2>
//                 <h1 className="title-font text-lg font-medium text-white mb-3">
//                   Neptune
//                 </h1>
//                 <p className="leading-relaxed">
//                   Photo booth fam kinfolk cold-pressed sriracha leggings
//                   jianbing microdosing tousled waistcoat.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/3 sm:w-1/2 p-4">
//             <div className="flex relative">
//               <img
//                 alt="gallery"
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//                 src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               />
//               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                 <h2 className={`tracking-widest text-sm title-font font-medium text-${props.theme}-400 mb-1`}>
//                   THE SUBTITLE
//                 </h2>
//                 <h1 className="title-font text-lg font-medium text-white mb-3">
//                   Neptune
//                 </h1>
//                 <p className="leading-relaxed">
//                   Photo booth fam kinfolk cold-pressed sriracha leggings
//                   jianbing microdosing tousled waistcoat.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/3 sm:w-1/2 p-4">
//             <div className="flex relative">
//               <img
//                 alt="gallery"
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//                 src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               />
//               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                 <h2 className={`tracking-widest text-sm title-font font-medium text-${props.theme}-400 mb-1`}>
//                   THE SUBTITLE
//                 </h2>
//                 <h1 className="title-font text-lg font-medium text-white mb-3">
//                   Neptune
//                 </h1>
//                 <p className="leading-relaxed">
//                   Photo booth fam kinfolk cold-pressed sriracha leggings
//                   jianbing microdosing tousled waistcoat.
//                 </p>
//               </div>
//             </div>
//           </div>
//                     <div className="lg:w-1/3 sm:w-1/2 p-4">
//             <div className="flex relative">
//               <img
//                 alt="gallery"
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//                 src="https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               />
//               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                 <h2 className={`tracking-widest text-sm title-font font-medium text-${props.theme}-400 mb-1`}>
//                   THE SUBTITLE
//                 </h2>
//                 <h1 className="title-font text-lg font-medium text-white mb-3">
//                   Neptune
//                 </h1>
//                 <p className="leading-relaxed">
//                   Photo booth fam kinfolk cold-pressed sriracha leggings
//                   jianbing microdosing tousled waistcoat.
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// Gallery.defaultProps = {
//   theme: 'indigo'
// };

// Gallery.propTypes = {
//   theme: PropTypes.string.isRequired
// };

// export default Gallery;
import React from "react";
import PropTypes from "prop-types";

const Gallery = ({ theme }) => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            BM HOTEL
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore our hotel room gallery for a visual journey through our luxurious accommodations. Discover elegantly designed rooms, breathtaking views, and modern amenities that await you. Immerse yourself in the essence of comfort and style before booking your unforgettable stay.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {galleryData.map((imageSrc, index) => (
            <GalleryItem key={index} theme={theme} imageSrc={imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ imageSrc, theme }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="relative">
        <img
          alt="gallery"
          className="w-full h-full object-cover"
          src={imageSrc}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <div
          className={`overlay absolute inset-0 bg-gray-900 ${hovered ? 'opacity-100' : 'opacity-0'} hover:opacity-100 transition-opacity`}
        ></div>
      </div>
    </div>
  );
};

Gallery.defaultProps = {
  theme: 'indigo'
};

Gallery.propTypes = {
  theme: PropTypes.string.isRequired
};

const galleryData = [
  "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/601x361",
  "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

export default Gallery;
