import React, { useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
// import FeedBack from './FeedBack';
import './App.css' 
const Room = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState('');
  // const [selectedFood, setSelectedFood] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [availabilityChecked, setAvailabilityChecked] = useState(' ');
  // const [checkInDate, setCheckInDate] = useState('');
  // const [checkInTime, setCheckInTime] = useState('');
  // const [checkOutDate, setCheckOutDate] = useState('');
  // const [checkOutTime, setCheckOutTime] = useState('');
  // const [numAdults, setNumAdults] = useState(1);
  // const [numChildren, setNumChildren] = useState(0);
  // const [selectedLocation, setSelectedLocation] = useState('');
  // const [selectedFood, setSelectedFood] = useState('');
  // const [selectedRoomType, setSelectedRoomType] = useState('');
  // const [bookingDetails, setBookingDetails] = useState('');

  // const handleBookButtonClick = () => {
  //   console.log('Booking the room...');
  // };
  
  // const handleAddServiceButtonClick = (roomId) => {
  //   console.log(`Adding service to room with ID: ${roomId}`);
  // };
  const handleBookButtonClick = () => {
    // Check if all fields are filled
    if (checkInDate && checkInTime && checkOutDate && checkOutTime && selectedLocation && selectedRoomType) {
      // All fields are filled, proceed with availability check
      console.log('Availability check triggered...');
      // Perform your availability check logic here
      // You can fetch available rooms based on the selected options
      setAvailabilityChecked(true); // Example: Set availability checked to true
    } else {
      // Show an alert or message indicating that all fields are required
      alert('Please fill in all fields before checking availability.');
    }
  };
  return (
    <div>
        <div style={{ backgroundImage: `url(https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <h1>Our Rooms</h1>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
  <label style={{ marginRight: '10px' }}>
    Check-in Date:
    <input
      type="date"
      value={checkInDate}
      onChange={(e) => setCheckInDate(e.target.value)}
      style={{ width: '100px', height: '20px' }}
    />
  </label>

  <label style={{ marginRight: '10px' }}>
    Check-in Time:
    <input
      type="time"
      value={checkInTime}
      onChange={(e) => setCheckInTime(e.target.value)}
      style={{ width: '100px', height: '20px' }}
    />
  </label>

  <label style={{ marginRight: '10px' }}>
    Check-out Date:
    <input
      type="date"
      value={checkOutDate}
      onChange={(e) => setCheckOutDate(e.target.value)}
      style={{ width: '100px', height: '20px' }}
    />
  </label>

  <label style={{ marginRight: '10px' }}>
    Check-out Time:
    <input
      type="time"
      value={checkOutTime}
      onChange={(e) => setCheckOutTime(e.target.value)}
      style={{ width: '100px', height: '20px' }}
    />
  </label>

  <label style={{ marginRight: '10px' }}>
    Adults:
    <input
      type="number"
      value={numAdults}
      onChange={(e) => setNumAdults(e.target.value)}
      style={{ width: '100px', height: '20px' }}
      min="1"
    />
  </label>

  <label style={{ marginRight: '10px' }}>
    Children:
    <input
      type="number"
      value={numChildren}
      onChange={(e) => setNumChildren(e.target.value)}
      style={{ width: '100px', height: '20px' }}
      min="0"
    />
  </label>

  <label style={{ marginRight: '10px' }}>
    Location:
    <select
      value={selectedLocation}
      onChange={(e) => setSelectedLocation(e.target.value)}
      style={{ width: '100px', height: '20px' }}
    >
      <option value="location"></option>
      <option value="location1">Chennai</option>
      <option value="location2">Madurai</option>
      <option value="location3">Coimbatore</option>
      <option value="location4">Salem</option>
      <option value="location5">Pondicherry</option>
      <option value="location6">Mayiladuthurai</option>
      <option value="location7">Nagapattinam</option>
      <option value="location8">Thanjavur</option>
      <option value="location9">Cuddalore</option>
      <option value="location10">Tiruchirappalli</option>
    </select>
  </label>
   

  <label style={{ marginRight: '10px' }}>
    RoomType:
    <select
      value={selectedRoomType}
      onChange={(e) => setSelectedRoomType(e.target.value)}
      style={{ width: '100px', height: '20px' }}
    >
      <option value="roomtype"></option>
      <option value="roomtype1">Single Room</option>
      <option value="roomtype2">Queen room</option>
      <option value="roomtype3">Suites</option>
      <option value="roomtype4">Standard room</option>
      <option value="roomtype5">Family Room</option>
      <option value="roomtype6">Twin room</option>
    </select>
  </label>
</div>
<center>
{availabilityChecked && (
        <div>
                 <button onClick={() => handleBookButtonClick()}>Check Availability</button>
          {/* Display available rooms here */}
          <div class="ui link cards horizontal">
{/* <Card>
  <Card.Content>
    <Image
      src={"https://media-cdn.tripadvisor.com/media/photo-s/0e/53/7f/21/luxury-queen-bedroom.jpg"}/>
    <h3 align="center">Queen Room</h3>
    <Card.Description>
"Indulge in refined comfort in our Queen Room, featuring exquisite furnishings, captivating views, and attentive service. Enhance your romantic retreat with tasteful decor and a tranquil atmosphere for an unforgettable experience."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹15000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner</label>
  <description>{''}</description>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
  <break>
    <Button color='purple'>
      BOOK
    </Button>
</break>
  </div>
</Card.Content>
</Card> */}
</div>
                  </div>
      )}
      </center>
       {/* <button onClick={() => handleBookButtonClick()}>Check Availability</button> */}
       {/* </center> */}
      <div className="room-container-horizontal">
    <div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/75/4a/23/standard-single-room.jpg?w=700&h=-1&s=1"}/>
    <h3 align="center">Single Room</h3>
    <Card.Description>
"Indulge in the refined comfort of our Single Room, featuring tasteful furnishings and a cozy atmosphere. Enjoy a peaceful stay with thoughtful amenities and personalized service for a memorable experience."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹12000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>Free WIFI | Water Bottel | Air Conditioner | Break Fast</label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
{/* <div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
    <h3 align="center">Family Room</h3>
    <Card.Description>
    "Indulge in exquisite comfort in our Family Room, featuring lavish furnishings, captivating views, and personalized service. Enhance your family retreat with tasteful decor and a tranquil ambiance for an unforgettable experience."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹16000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>Free WIFI | Water Bottel | Air Conditioner</label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div> */}

<div class="ui link cards horizontal">
  <Card>
    <Card.Content>
      <Image
        src={"https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=600"}
      />
      <h3 align="center">Family Room</h3>
      <Card.Description>
        "Indulge in exquisite comfort in our Family Room, featuring lavish furnishings, captivating views, and personalized service. Enhance your family retreat with tasteful decor and a tranquil ambiance for an unforgettable experience."
        <br />
        <br />
        <strong>Price: ₹16000/-</strong>
      </Card.Description>
    </Card.Content>
    <h4>Service</h4>
    <label>Free WIFI | Water Bottel | Air Conditioner</label>

    {/* <label style={{ marginRight: '10px' }}>
  Food:
  <select
    value={selectedFood}
    onChange={(e) => setSelectedFood(e.target.value)}
    style={{ width: '150px', height: '20px' }}
  >
    <option value="food"></option>
    <option value="food1">Burger</option>
    <option value="food2">Morning Combo</option>
    <option value="food3">Pasta</option>
    <option value="food4">Sushi</option>
    <option value="food5">Salad</option>
    <option value="food6">Steak</option>
    <option value="food7">Soup</option>
    <option value="food8">Tacos</option>
    <option value="food9">Ice Cream</option>
    <option value="food10">Sushi</option>
  </select>
</label> */}


    {/* <div>
      <h4>Select Meal</h4>
      <select>
        <option value="morning">Morning</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
    </div> */}

    <Card.Content extra>
      <div className="text-center ui button" style={{ marginRight: '50px', marginLeft: '45px' }}>
        <Button color="purple">BOOK</Button>
      </div>
    </Card.Content>
  </Card>
</div>


<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://media-cdn.tripadvisor.com/media/photo-s/0e/53/7f/21/luxury-queen-bedroom.jpg"}/>
    <h3 align="center">Queen Room</h3>
    <Card.Description>
"Indulge in refined comfort in our Queen Room, featuring exquisite furnishings, captivating views, and attentive service. Enhance your romantic retreat with tasteful decor and a tranquil atmosphere for an unforgettable experience."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹15000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner</label>
  <description>{''}</description>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
  <break>
    <Button color='purple'>
      BOOK
    </Button>
</break>
  </div>
</Card.Content>
</Card>
</div>

<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
    <h3 align="center">Suites</h3>
    <Card.Description>
    "Indulge in the epitome of luxury with our Suites, where lavish furnishings, stunning views, and personalized service await you. Enhance your romantic retreat with sophisticated decor and a tranquil ambiance, creating lasting memories an unforgettable."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹10000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner</label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>

<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://1079465213.rsc.cdn77.org/media/2058/mercure-london-hyde-park-standard-twin-room-2.jpg?anchor=center&mode=crop&width=1170&height=780&rnd=133016646540000000"}/>
    <h3 align="center">Twin Room</h3>
    <Card.Description>
    "Indulge in the epitome of comfort and style in our Twin Room, featuring tasteful furnishings, stunning views, and dedicated service. Enhance your retreat with chic decor and a tranquil atmosphere for a memorable stay."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹11000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner</label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">

<Card>
  <Card.Content>
    <Image
      src={"https://res.cloudinary.com/simplotel/image/upload/x_0,y_66,w_1280,h_720,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/the-residency-karur/Standard_Room_2_ayx1oc"}/>
    <h3 align="center">Standard Room</h3>
    <Card.Description>
    "Indulge in comfort and style in our Standard Room, featuring tasteful furnishings, picturesque views, and attentive service. Enhance your stay with refined decor and a tranquil atmosphere for a memorable experience."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹10000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner</label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqC9F1aWeG9BSXaQOW_QOd-OEyTI_xhM_FA&usqp=CAU"}/>
    <h3 align="center">Couples Room</h3>
    <Card.Description>
"Indulge in the ultimate romantic retreat with our Couples Room, offering lavish furnishings, captivating views, and personalized service. Enhance your romantic escape with sophisticated decor and a tranquil ambiance for an unforgettable."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹14000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://www.xotels.com/wp-content/uploads/2022/07/Double-Room-Type-XOTELS.webp"}/>
    <h3 align="center">Double Room</h3>
    <Card.Description>
    "Indulge in the epitome of comfort and style with our Double Room, featuring tasteful furnishings, picturesque views, and dedicated service. Enhance your stay with sophisticated decor and a tranquil atmosphere for a memorable retreat."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹13000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqC9F1aWeG9BSXaQOW_QOd-OEyTI_xhM_FA&usqp=CAU"}/>
    <h3 align="center">Couples Room</h3>
    <Card.Description>
"Indulge in the ultimate romantic retreat with our Couples Room, offering lavish furnishings, captivating views, and personalized service. Enhance your romantic escape with sophisticated decor and a tranquil ambiance."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹15000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>

<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://www.keioplaza.com/rooms/images/universal_ph07.jpg"}/>
    <h3 align="center">Accessible Room / Disabled Room</h3>
    <Card.Description>
"Indulge in unparalleled comfort in our Accessible Room, designed with thoughtful features for guests with diverse needs. Experience the perfect blend of accessibility and luxury with specially adapted furnishings, inclusive amenities, and personalized service. Elevate your stay with tasteful decor and a serene ambiance, ensuring a memorable and inclusive experience for all our guests."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹9000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner</label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>

<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://setupmyhotel.com/images/Room-Type-Adjoining-rooms.jpg"}/>
    <h3 align="center">Adjoining rooms</h3>
    <Card.Description>
"Indulge in the perfect blend of comfort and convenience with our Adjoining Rooms. Immerse yourself in a welcoming atmosphere enhanced by tasteful decor and enjoy the flexibility of having connected spaces. Elevate your stay with thoughtful amenities and personalized service for a memorable experience."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹10000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner</label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>

<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
    <h3 align="center">Suites</h3>
    <Card.Description>
    "Indulge in the epitome of luxury with our Suites, where lavish furnishings, stunning views, and personalized service await you. Enhance your romantic retreat with sophisticated decor and a tranquil ambiance, creating lasting memories for an unforgettable stay."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹10000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner</label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://en.idei.club/uploads/posts/2023-03/1679412216_en-idei-club-p-romantic-hotel-room-dizain-instagram-1.jpg"}/>
    <h3 align="center">Romantic Room</h3>
    <Card.Description>
    "Indulge in a romantic escape in our exquisite Romantic Room, adorned with luxurious furnishings, enchanting views, and personalized service. Enhance your intimate getaway with tasteful decor and a tranquil ambiance."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹15000/-</strong>
 </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://lh5.googleusercontent.com/J1XpKNGlglaV2YCFLOVWDMd4rUxkM2SoanCbgOfs3OymPCbOT9azKGjisbonjM-K5ti7fnf-o68yRmJwZi083J6Yarx7M20YG7ft92_5h2J3Tew_XAQLG-FqCOofn2fhbjcYCdaU"}/>
    <h3 align="center">Quad Room</h3>
    <Card.Description>
    "Indulge in unmatched comfort in our Quad Room featuring lavish furnishings, stunning views, and dedicated service. Enhance your group stay with sophisticated decor and a tranquil atmosphere for a memorable experience in our Quad Room."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹11000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://lh6.googleusercontent.com/LAbDs9JrwGjxAAQoHT1lNnKt4a5_OXDqw7S3hZQajGS30XvPwjynPOA8-afixA6QqxL_g7iPn12dRWTO40GhEyPS7n7CDzRYg61Ib334yCK6ZIPjLNZbZExrLk_8BPvf83fq1Qte"}/>
    <h3 align="center">Double-Double Room</h3>
    <Card.Description>
    
"Indulge in the epitome of comfort and style with our Double-Double Room featuring spacious accommodations, modern furnishings, and exceptional service. Enjoy the convenience of two cozy beds, contemporary decor."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹16000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://lh5.googleusercontent.com/hbi2os5doGfcairEVFRpqMUXuV5RI4lNeNHKwLZy8l86uNYczA8j0z5O2pbXBeeGqQh1Ry2oR0oCczLSKE2GxUJaItnf2q2FiOY-0eiuaxBiSEGYQhOUhmVSfBXxDOVFJwkf3yWn"}/>
    <h3 align="center">Presidential Suite</h3>
    <Card.Description>
    "Indulge in the epitome of luxury in our Presidential Suite, featuring lavish furnishings, awe-inspiring views, and tailored service. Enhance your exclusive retreat with sophisticated decor and a tranquil ambiance for an unforgettable."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹25000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M"}/>
    <h3 align="center">Penthouse Room</h3>
    <Card.Description>
    "
Penthouse suites, occupying entire top floors, are luxury accommodations in iconic city hotels, often granted to esteemed guests. Elevator access to the penthouse floor typically requires a key for enhanced privacy."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹12000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://hotelgreencastle.com/Tulip-Inn-Green-n-Breeze-Resorts/index_files/Duplex_room_main.jpg"}/>
    <h3 align="center">Duplex Room</h3>
    <Card.Description>
    "Deluxe hotel rooms typically offer larger spaces, enhanced amenities, and scenic views, setting them apart from standard rooms. The price difference reflects these additional features, such as upgraded bathrooms, private terraces, or balconies."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹10000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://www.katakeereehotel.com/src/photos/gallery/villa-phuket-kata-beach-perfect-villa-hd.jpg"}/>
    <h3 align="center">Villa</h3>
    <Card.Description>
    "Villa hotels encompass two primary types: the first transforms former villas into boutique hotels, while the second, known as Villa Resorts, operates as a hotel-style establishment providing private villas for accommodation."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹19000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
<div class="ui link cards horizontal">
<Card>
  <Card.Content>
    <Image
      src={"https://pragatiresorts.com/wp-content/uploads/2018/10/Honeymoon-Suite.jpg"}/>
    <h3 align="center">HoneyMoon Suite</h3>
    <Card.Description>
    "Experience unparalleled luxury in our HoneyMoon Suite with opulent furnishings, breathtaking views, and personalized service. Elevate your romantic getaway with elegant decor and a serene ambiance for an unforgettable honeymoon."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹16000/-</strong>
    </Card.Description>
  </Card.Content>
  <h4>Service</h4>
  <label>WIFI | Water Bottel | Air Conditioner </label>
  <Card.Content extra>
  <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
    <Button color='purple'>
      BOOK
    </Button>
  </div>
</Card.Content>
</Card>
</div>
    </div>
    {/* <FeedBack/> */}
    </div>
    </div>
  );
 };
 export default Room;


















// import React, { useState, useEffect } from 'react';
// import { Button, Card, Image } from 'semantic-ui-react';
// // import './Rooms.css';
// // import './App.css';
// const Rooms = () => {
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkInTime, setCheckInTime] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [checkOutTime, setCheckOutTime] = useState('');
//   const [numAdults, setNumAdults] = useState(1);
//   const [numChildren, setNumChildren] = useState(0);
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [selectedRoomType, setSelectedRoomType] = useState('');
//   const [availabilityChecked, setAvailabilityChecked] = useState(false);
//   const [rooms, setRooms] = useState([]);

//   // useEffect to fetch rooms when availability is checked
//   useEffect(() => {
//     if (availabilityChecked) {
//       // Fetch rooms based on selected options (dummy implementation)
//       const fetchedRooms = fetchRooms(); // You need to implement fetchRooms function
//       setRooms(fetchedRooms);
//     }
//   }, [availabilityChecked]);

//   // Function to simulate fetching rooms based on selected options
//   const fetchRooms = () => {
//     // Dummy implementation - You can replace this with actual API calls
//     return [
//       // { id: 1, name: 'Room 1', description: 'Description of Room 1', price: '$100', image: 'room1.jpg' },
//       // { id: 2, name: 'Room 2', description: 'Description of Room 2', price: '$120', image: 'room2.jpg' },
      
//       // Add more rooms as needed
//     ];
//   };

//   // Function to handle checking availability and fetching rooms
//   const handleBookButtonClick = () => {
//     // Check if all fields are filled
//     if (checkInDate && checkInTime && checkOutDate && checkOutTime && selectedLocation && selectedRoomType) {
//       // All fields are filled, proceed with availability check
//       console.log('Availability check triggered...');
//       setAvailabilityChecked(true);
//     } else {
//       // Show an alert or message indicating that all fields are required
//       alert('Please fill in all fields before checking availability.');
//     }
//   };

//   return (
//     <div>
//       <div style={{ backgroundImage: `url(https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
//         <h1>Our Rooms</h1>
//         <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//   <label style={{ marginRight: '10px' }}>
//     Check-in Date:
//     <input
//       type="date"
//       value={checkInDate}
//       onChange={(e) => setCheckInDate(e.target.value)}
//       style={{ width: '100px', height: '20px' }}
//     />
//   </label>

//   <label style={{ marginRight: '10px' }}>
//     Check-in Time:
//     <input
//       type="time"
//       value={checkInTime}
//       onChange={(e) => setCheckInTime(e.target.value)}
//       style={{ width: '100px', height: '20px' }}
//     />
//   </label>

//   <label style={{ marginRight: '10px' }}>
//     Check-out Date:
//     <input
//       type="date"
//       value={checkOutDate}
//       onChange={(e) => setCheckOutDate(e.target.value)}
//       style={{ width: '100px', height: '20px' }}
//     />
//   </label>

//   <label style={{ marginRight: '10px' }}>
//     Check-out Time:
//     <input
//       type="time"
//       value={checkOutTime}
//       onChange={(e) => setCheckOutTime(e.target.value)}
//       style={{ width: '100px', height: '20px' }}
//     />
//   </label>

//   <label style={{ marginRight: '10px' }}>
//     Adults:
//     <input
//       type="number"
//       value={numAdults}
//       onChange={(e) => setNumAdults(e.target.value)}
//       style={{ width: '100px', height: '20px' }}
//       min="1"
//     />
//   </label>

//   <label style={{ marginRight: '10px' }}>
//     Children:
//     <input
//       type="number"
//       value={numChildren}
//       onChange={(e) => setNumChildren(e.target.value)}
//       style={{ width: '100px', height: '20px' }}
//       min="0"
//     />
//   </label>

//   <label style={{ marginRight: '10px' }}>
//     Location:
//     <select
//       value={selectedLocation}
//       onChange={(e) => setSelectedLocation(e.target.value)}
//       style={{ width: '100px', height: '20px' }}
//     >
//       <option value="location"></option>
//       <option value="location1">Chennai</option>
//       <option value="location2">Madurai</option>
//       <option value="location3">Coimbatore</option>
//       <option value="location4">Salem</option>
//       <option value="location5">Pondicherry</option>
//       <option value="location6">Mayiladuthurai</option>
//       <option value="location7">Nagapattinam</option>
//       <option value="location8">Thanjavur</option>
//       <option value="location9">Cuddalore</option>
//       <option value="location10">Tiruchirappalli</option>
//     </select>
//   </label>
   

//   <label style={{ marginRight: '10px' }}>
//     RoomType:
//     <select
//       value={selectedRoomType}
//       onChange={(e) => setSelectedRoomType(e.target.value)}
//       style={{ width: '100px', height: '20px' }}
//     >
//       <option value="roomtype"></option>
//       <option value="roomtype1">Single Room</option>
//       <option value="roomtype2">Queen room</option>
//       <option value="roomtype3">Suites</option>
//       <option value="roomtype4">Standard room</option>
//       <option value="roomtype5">Family Room</option>
//       <option value="roomtype6">Twin room</option>
//     </select>
//   </label>
// </div>
//         {/* Your input fields */}
//         <button onClick={() => handleBookButtonClick()}>Check Availability</button>
//       </div>
//       {availabilityChecked && (
//         <div>
//           {/* Display fetched rooms */}
//           <h2>Available Rooms:</h2>
//           <div className="room-container-horizontal">
//     <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/75/4a/23/standard-single-room.jpg?w=700&h=-1&s=1"}/>
//     <h3 align="center">Single Room</h3>
//     <Card.Description>
// "Indulge in the refined comfort of our Single Room, featuring tasteful furnishings and a cozy atmosphere. Enjoy a peaceful stay with thoughtful amenities and personalized service for a memorable experience."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹12000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>Free WIFI | Water Bottel | Air Conditioner | Break Fast</label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
//   <Card>
//     <Card.Content>
//       <Image
//         src={"https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=600"}
//       />
//       <h3 align="center">Family Room</h3>
//       <Card.Description>
//         "Indulge in exquisite comfort in our Family Room, featuring lavish furnishings, captivating views, and personalized service. Enhance your family retreat with tasteful decor and a tranquil ambiance for an unforgettable experience."
//         <br />
//         <br />
//         <strong>Price: ₹16000/-</strong>
//       </Card.Description>
//     </Card.Content>
//     <h4>Service</h4>
//     <label>Free WIFI | Water Bottel | Air Conditioner</label>

//     <label style={{ marginRight: '10px' }}>
//   Food:
//   <select
//     // value={selectedFood}
//     // onChange={(e) => setSelectedFood(e.target.value)}
//     style={{ width: '150px', height: '20px' }}
//   >
//     <option value="food"></option>
//     <option value="food1">Burger</option>
//     <option value="food2">Morning Combo</option>
//     <option value="food3">Pasta</option>
//     <option value="food4">Sushi</option>
//     <option value="food5">Salad</option>
//     <option value="food6">Steak</option>
//     <option value="food7">Soup</option>
//     <option value="food8">Tacos</option>
//     <option value="food9">Ice Cream</option>
//     <option value="food10">Sushi</option>
//   </select>
// </label>


//     <div>
//       <h4>Select Meal</h4>
//       <select>
//         <option value="morning">Morning</option>
//         <option value="lunch">Lunch</option>
//         <option value="dinner">Dinner</option>
//       </select>
//     </div>

//     <Card.Content extra>
//       <div className="text-center ui button" style={{ marginRight: '50px', marginLeft: '45px' }}>
//         <Button color="purple">BOOK</Button>
//       </div>
//     </Card.Content>
//   </Card>
// </div>


// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://media-cdn.tripadvisor.com/media/photo-s/0e/53/7f/21/luxury-queen-bedroom.jpg"}/>
//     <h3 align="center">Queen Room</h3>
//     <Card.Description>
// "Indulge in refined comfort in our Queen Room, featuring exquisite furnishings, captivating views, and attentive service. Enhance your romantic retreat with tasteful decor and a tranquil atmosphere for an unforgettable experience."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹15000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner</label>
//   <description>{''}</description>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//   <break>
//     <Button color='purple'>
//       BOOK
//     </Button>
// </break>
//   </div>
// </Card.Content>
// </Card>
// </div>

// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
//     <h3 align="center">Suites</h3>
//     <Card.Description>
//     "Indulge in the epitome of luxury with our Suites, where lavish furnishings, stunning views, and personalized service await you. Enhance your romantic retreat with sophisticated decor and a tranquil ambiance, creating lasting memories an unforgettable."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹10000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner</label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>

// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://1079465213.rsc.cdn77.org/media/2058/mercure-london-hyde-park-standard-twin-room-2.jpg?anchor=center&mode=crop&width=1170&height=780&rnd=133016646540000000"}/>
//     <h3 align="center">Twin Room</h3>
//     <Card.Description>
//     "Indulge in the epitome of comfort and style in our Twin Room, featuring tasteful furnishings, stunning views, and dedicated service. Enhance your retreat with chic decor and a tranquil atmosphere for a memorable stay."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹11000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner</label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">

// <Card>
//   <Card.Content>
//     <Image
//       src={"https://res.cloudinary.com/simplotel/image/upload/x_0,y_66,w_1280,h_720,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/the-residency-karur/Standard_Room_2_ayx1oc"}/>
//     <h3 align="center">Standard Room</h3>
//     <Card.Description>
//     "Indulge in comfort and style in our Standard Room, featuring tasteful furnishings, picturesque views, and attentive service. Enhance your stay with refined decor and a tranquil atmosphere for a memorable experience."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹10000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner</label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqC9F1aWeG9BSXaQOW_QOd-OEyTI_xhM_FA&usqp=CAU"}/>
//     <h3 align="center">Couples Room</h3>
//     <Card.Description>
// "Indulge in the ultimate romantic retreat with our Couples Room, offering lavish furnishings, captivating views, and personalized service. Enhance your romantic escape with sophisticated decor and a tranquil ambiance for an unforgettable."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹14000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://www.xotels.com/wp-content/uploads/2022/07/Double-Room-Type-XOTELS.webp"}/>
//     <h3 align="center">Double Room</h3>
//     <Card.Description>
//     "Indulge in the epitome of comfort and style with our Double Room, featuring tasteful furnishings, picturesque views, and dedicated service. Enhance your stay with sophisticated decor and a tranquil atmosphere for a memorable retreat."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹13000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqC9F1aWeG9BSXaQOW_QOd-OEyTI_xhM_FA&usqp=CAU"}/>
//     <h3 align="center">Couples Room</h3>
//     <Card.Description>
// "Indulge in the ultimate romantic retreat with our Couples Room, offering lavish furnishings, captivating views, and personalized service. Enhance your romantic escape with sophisticated decor and a tranquil ambiance."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹15000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>

// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://www.keioplaza.com/rooms/images/universal_ph07.jpg"}/>
//     <h3 align="center">Accessible Room / Disabled Room</h3>
//     <Card.Description>
// "Indulge in unparalleled comfort in our Accessible Room, designed with thoughtful features for guests with diverse needs. Experience the perfect blend of accessibility and luxury with specially adapted furnishings, inclusive amenities, and personalized service. Elevate your stay with tasteful decor and a serene ambiance, ensuring a memorable and inclusive experience for all our guests."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹9000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner</label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>

// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://setupmyhotel.com/images/Room-Type-Adjoining-rooms.jpg"}/>
//     <h3 align="center">Adjoining rooms</h3>
//     <Card.Description>
// "Indulge in the perfect blend of comfort and convenience with our Adjoining Rooms. Immerse yourself in a welcoming atmosphere enhanced by tasteful decor and enjoy the flexibility of having connected spaces. Elevate your stay with thoughtful amenities and personalized service for a memorable experience."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹10000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner</label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>

// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
//     <h3 align="center">Suites</h3>
//     <Card.Description>
//     "Indulge in the epitome of luxury with our Suites, where lavish furnishings, stunning views, and personalized service await you. Enhance your romantic retreat with sophisticated decor and a tranquil ambiance, creating lasting memories for an unforgettable stay."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹10000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner</label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://en.idei.club/uploads/posts/2023-03/1679412216_en-idei-club-p-romantic-hotel-room-dizain-instagram-1.jpg"}/>
//     <h3 align="center">Romantic Room</h3>
//     <Card.Description>
//     "Indulge in a romantic escape in our exquisite Romantic Room, adorned with luxurious furnishings, enchanting views, and personalized service. Enhance your intimate getaway with tasteful decor and a tranquil ambiance."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹15000/-</strong>
//  </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://lh5.googleusercontent.com/J1XpKNGlglaV2YCFLOVWDMd4rUxkM2SoanCbgOfs3OymPCbOT9azKGjisbonjM-K5ti7fnf-o68yRmJwZi083J6Yarx7M20YG7ft92_5h2J3Tew_XAQLG-FqCOofn2fhbjcYCdaU"}/>
//     <h3 align="center">Quad Room</h3>
//     <Card.Description>
//     "Indulge in unmatched comfort in our Quad Room featuring lavish furnishings, stunning views, and dedicated service. Enhance your group stay with sophisticated decor and a tranquil atmosphere for a memorable experience in our Quad Room."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹11000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://lh6.googleusercontent.com/LAbDs9JrwGjxAAQoHT1lNnKt4a5_OXDqw7S3hZQajGS30XvPwjynPOA8-afixA6QqxL_g7iPn12dRWTO40GhEyPS7n7CDzRYg61Ib334yCK6ZIPjLNZbZExrLk_8BPvf83fq1Qte"}/>
//     <h3 align="center">Double-Double Room</h3>
//     <Card.Description>
    
// "Indulge in the epitome of comfort and style with our Double-Double Room featuring spacious accommodations, modern furnishings, and exceptional service. Enjoy the convenience of two cozy beds, contemporary decor."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹16000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://lh5.googleusercontent.com/hbi2os5doGfcairEVFRpqMUXuV5RI4lNeNHKwLZy8l86uNYczA8j0z5O2pbXBeeGqQh1Ry2oR0oCczLSKE2GxUJaItnf2q2FiOY-0eiuaxBiSEGYQhOUhmVSfBXxDOVFJwkf3yWn"}/>
//     <h3 align="center">Presidential Suite</h3>
//     <Card.Description>
//     "Indulge in the epitome of luxury in our Presidential Suite, featuring lavish furnishings, awe-inspiring views, and tailored service. Enhance your exclusive retreat with sophisticated decor and a tranquil ambiance for an unforgettable."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹25000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M"}/>
//     <h3 align="center">Penthouse Room</h3>
//     <Card.Description>
//     "
// Penthouse suites, occupying entire top floors, are luxury accommodations in iconic city hotels, often granted to esteemed guests. Elevator access to the penthouse floor typically requires a key for enhanced privacy."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹12000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://hotelgreencastle.com/Tulip-Inn-Green-n-Breeze-Resorts/index_files/Duplex_room_main.jpg"}/>
//     <h3 align="center">Duplex Room</h3>
//     <Card.Description>
//     "Deluxe hotel rooms typically offer larger spaces, enhanced amenities, and scenic views, setting them apart from standard rooms. The price difference reflects these additional features, such as upgraded bathrooms, private terraces, or balconies."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹10000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://www.katakeereehotel.com/src/photos/gallery/villa-phuket-kata-beach-perfect-villa-hd.jpg"}/>
//     <h3 align="center">Villa</h3>
//     <Card.Description>
//     "Villa hotels encompass two primary types: the first transforms former villas into boutique hotels, while the second, known as Villa Resorts, operates as a hotel-style establishment providing private villas for accommodation."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹19000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// <div class="ui link cards horizontal">
// <Card>
//   <Card.Content>
//     <Image
//       src={"https://pragatiresorts.com/wp-content/uploads/2018/10/Honeymoon-Suite.jpg"}/>
//     <h3 align="center">HoneyMoon Suite</h3>
//     <Card.Description>
//     "Experience unparalleled luxury in our HoneyMoon Suite with opulent furnishings, breathtaking views, and personalized service. Elevate your romantic getaway with elegant decor and a serene ambiance for an unforgettable honeymoon."<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Price: ₹16000/-</strong>
//     </Card.Description>
//   </Card.Content>
//   <h4>Service</h4>
//   <label>WIFI | Water Bottel | Air Conditioner </label>
//   <Card.Content extra>
//   <div className='text-center ui button' style={{ marginRight: '50px',marginLeft:'45px' }}>
//     <Button color='purple'>
//       BOOK
//     </Button>
//   </div>
// </Card.Content>
// </Card>
// </div>
// </div>
//           {/* <div className="room-container">
//             {rooms.map(room => (
//               <Card key={room.id}>
//                 <Image src={room.image} wrapped ui={false} />
//                 <Card.Content>
//                   <Card.Header>{room.name}</Card.Header>
//                   <Card.Meta>
//                     <span className='date'>{room.price}</span>
//                   </Card.Meta>
//                   <Card.Description>
//                     {room.description}
//                   </Card.Description>
//                 </Card.Content>
//                 <Card.Content extra>
//                   <Button>Add to Cart</Button>
//                 </Card.Content>
//               </Card>
//             ))}
//           </div> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rooms;