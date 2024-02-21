// import React, { useState } from 'react';
// import './FeedBack.css';
// import { Rating, Popup } from 'semantic-ui-react';

// const FeedBack = () => {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const getHeartColor = (ratingValue) => {
//     switch (ratingValue) {
//       case 1:
//         return 'black';
//       case 2:
//         return 'pink';
//       case 4:
//         return 'green';
//       case 5:
//         return 'red';
//       default:
//         return 'grey'; // Default color for other ratings
//     }
//   };

//   const handleRatingChange = (e, { rating }) => {
//     setRating(rating);
//     setPopupMessage(getPopupMessage(rating));
//   };

//   const getPopupMessage = (ratingValue) => {
//     switch (ratingValue) {
//       case 1:
//         return 'Bad';
//       case 2:
//         return 'Satisfaction';
//       case 3:
//         return 'Good';
//       case 4:
//         return 'Very Good';
//       case 5:
//         return 'Excellent';
//       default:
//         return '';
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Feedback submitted:', { rating, comment });
//     setSubmitted(true);
//   };

//   return (
//     <div className="FeedBack">
//       <h2>Feedback</h2>
//       {submitted ? (
//         <div className="submitted-message">
//           <p>Thank you for your Feedback!</p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <label className="rating-label">
//             Rating:
//             <Popup
//               trigger={
//                 <Rating
//                   icon='heart'
//                   defaultRating={rating}
//                   maxRating={5}
//                   onRate={handleRatingChange}
//                   clearable
//                   rating={rating}
//                   size="massive"
//                   color={getHeartColor(rating)}
//                 />
//               }
//               content={popupMessage}
//               inverted
//             />
//           </label>
//           <br />
//           <label>
//             Comment:
//             <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
//           </label>
//           <br />
//           <button type="submit">Submit Feedback</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default FeedBack;
// FeedBack.js

import React, { useState } from 'react';
import { Rating } from 'semantic-ui-react';
import './FeedBack.css';
const FeedBack = () => {
  const [fullName, setFullName] = useState('');
  const [contactInformation, setContactInformation] = useState('');
  const [foodQuality, setFoodQuality] = useState(0);
  const [foodTaste, setFoodTaste] = useState(0);
  const [foodPrice, setFoodPrice] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [ambianceRating, setAmbianceRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [suggestions, setSuggestions] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log('Feedback submitted:', {
      fullName,
      contactInformation,
      foodQuality,
      foodTaste,
      foodPrice,
      serviceRating,
      ambianceRating,
      cleanlinessRating,
      suggestions,
    });
    setSubmitted(true);
  };

  return (
    <div className="FeedBack">
      <h2>Your feedback matters.</h2>
      {submitted ? (
        <div className="submitted-message">
          <p>Thank you for your Feedback!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Full name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email address and/or phone number:
            <input
              type="text"
              value={contactInformation}
              onChange={(e) => setContactInformation(e.target.value)}
            />
          </label>
          <br />
          <div>
            <h3>Please rate the following:</h3>
            {/* Food Ratings */}
            <h4>Food Ratings</h4>
            <label>Food Quality:</label>
            <Rating
              icon="star"
              defaultRating={foodQuality}
              maxRating={5}
              onRate={(e, { rating }) => setFoodQuality(rating)}
            />
            <label>Food Taste:</label>
            <Rating
              icon="star"
              defaultRating={foodTaste}
              maxRating={5}
              onRate={(e, { rating }) => setFoodTaste(rating)}
            />
            <label>Price:</label>
            <Rating
              icon="star"
              defaultRating={foodPrice}
              maxRating={5}
              onRate={(e, { rating }) => setFoodPrice(rating)}
            />
            {/* Venue Ratings */}
            <h4>Venue Ratings</h4>
            <label>Service:</label>
            <Rating
              icon="star"
              defaultRating={serviceRating}
              maxRating={5}
              onRate={(e, { rating }) => setServiceRating(rating)}
            />
            <label>Ambiance:</label>
            <Rating
              icon="star"
              defaultRating={ambianceRating}
              maxRating={5}
              onRate={(e, { rating }) => setAmbianceRating(rating)}
            />
            <label>Cleanliness:</label>
            <Rating
              icon="star"
              defaultRating={cleanlinessRating}
              maxRating={5}
              onRate={(e, { rating }) => setCleanlinessRating(rating)}
            />
          </div>
          <label>
            Your comments or suggestions:
            <textarea
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default FeedBack;
