// import React from 'react'

// import "./Advantages.css";

// const items = [
//     {
//         url:"https://cdn-icons-png.flaticon.com/128/1/1848.png",
//         text:"PickUp",
//         Subtext:'There Has Never Been a Sadness that can not be Cured With Breakfast foods.'
//     },
//     {
//         url:"https://cdn-icons-png.flaticon.com/128/1/1848.png",
//         text:"WIFI",
//         Subtext:'Get The Best Wifi Connectivity Without any Interference.'
//     },
//     {
//         url:"https://cdn-icons-png.flaticon.com/128/1/1848.png",
//         text:"Car Parking",
//         Subtext:'There Has Never been a sadness that can not  be Cured With Car Parking.'
//     },
//     {
//         url:"https://cdn-icons-png.flaticon.com/128/1/1848.png",
//         text:"Fast Food",
//         Subtext:'There Has Never Been a Sadness that can not be Cured With Fast Foods.'
//     },
//     {
//         url:"https://cdn-icons-png.flaticon.com/128/1/1848.png",
//         text:"Soft Drinks",
//         Subtext:'There Has Never Been a Sadness that can not be Cured With Soft Drinks.'    }
// ]
// function Advantages() {
//   return (
//     <>
//     <div className="advantages">
//         <div className="advantages__info">
//             <div className="adv__header">
//                 <h1>Advantages of Staying With Us</h1>
//                 <h4>          </h4>
//             </div>
//             <div style={{ justifyContent: 'center',marginTop: 5}}>{items.map((item,index) =>(
//                 <div key={index} style={{alignItems: 'center',marginRight: 30, display: 'flex',marginLeft: '143px'}}>
//                     <img src={items[index].image} className='adv__img' alt='' />
//                     <div>
//                     <h5 className="adv__h5">{items[index].text}</h5>
//                     <h5 className="adv__h">{items[index].Subtext}</h5>
//                     </div>
//                 </div>
//             ))}
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Advantages;
import React from 'react';
import "./Advantages.css";


const items = [
    {
        url:"https://cdn-icons-png.flaticon.com/128/7060/7060111.png",
        text:"PickUp",
        Subtext:"Enjoy complimentary pickup services from hotel to nearby destinations such as railway stations, airports, and bus stands within a 5 km radius when you book a hotel room with us."
    },
    {
        url:"https://cdn-icons-png.flaticon.com/128/1459/1459402.png",
        text:"WIFI",
        Subtext:'Get The Best Wifi Connectivity Without any Interference.'
    },
    {
        url:"https://cdn-icons-png.flaticon.com/128/9412/9412322.png",
        text:"Car Parking",
        Subtext:"Complimentary car parking available for hotel guests, ensuring a hassle-free and convenient stay with worry-free access to secure on-site parking facilities."
    },
    {
        url:"https://cdn-icons-png.flaticon.com/128/3187/3187880.png",
        text:"Fast Food",
        Subtext:"Indulge in a quick and savory culinary experience with our hotel's fast-food offerings, featuring a delectable selection of mouthwatering dishes served with efficiency and flair."
    },
    {
        url:"https://cdn-icons-png.flaticon.com/128/1628/1628786.png",
        text:"Soft Drinks",
        Subtext:
        "Indulge in a refreshing array of soft and fruit drinks at our hotel, where every sip is a burst of vibrant flavors to elevate your dining experience."   
    },
    {
        url:"https://cdn-icons-png.flaticon.com/128/752/752734.png",
        text:"No Alcohol",
        Subtext:"Alcohol-free hotel room ensuring a serene and sober environment for your stay."   
    },
    {
        url:"https://cdn-icons-png.flaticon.com/128/13280/13280358.png",
        text:"24/7 Support",
        Subtext:"Round-the-clock assistance and guidance available 24/7 for uninterrupted support."    
    }
];

function Advantages() {
    return (
        <>
            <div className="advantages">
                <div className="advantages__info">
                    <div className="adv__header">
                        <h1>Advantages of Staying With Us</h1>
                        <h4></h4>
                    </div>
                    <div style={{ justifyContent: 'center', marginTop: 5 }}>
                        {items.map((item, index) => (
                            <div key={index} style={{ alignItems: 'center', marginRight: 30, display: 'flex', marginLeft: '143px' }}>
                                <img src={items[index].url} className='adv__img' alt='' />
                                <div>
                                    <h5 className="adv__h5">{items[index].text}</h5>
                                    <h5 className="adv__h">{items[index].Subtext}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Advantages;