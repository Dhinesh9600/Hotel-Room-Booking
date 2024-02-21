// import React from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact'
// import NotFound from './NotFound';
// import Header from './Header';
// import Footer from './Footer';
// import Login from './Login';
// import Contactus from './Contactus';
// import Signup from './Signup';
// import './App.css'
// const App = () => {
//   return (
//     <BrowserRouter>
//     <Header/>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/Home" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="/Login" element={<Login/>} />
//         <Route path="/Contactus" element={<Contactus/>} />
//         <Route path="/Signup" element={<Signup/>} />
//         <Route element={<NotFound/>} />
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Gallery from './Gallery';
import Contactus from './Contactus';
import Signup from './Signup';
import Rooms from './Rooms';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Rooms" element={<Rooms/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Contactus" element={<Contactus/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
