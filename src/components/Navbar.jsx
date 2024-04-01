import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../constants/images';
import Modal from 'react-modal';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    numberOfPeople: '',
    specialRequests: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingFormData({
      ...bookingFormData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", bookingFormData);
    setBookingFormData({
      name: '',
      email: '',
      phoneNumber: '',
      date: '',
      time: '',
      numberOfPeople: '',
      specialRequests: ''
    });
    setShowBookingModal(false);
  };

  const handleBookingModal = (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    setShowBookingModal(!showBookingModal);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setToggleMenu(false); // Close menu if screen size is small
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login"   >
        <a href="#login" className="p__opensans" id="app">Log In / Registration</a>
        <div />
        {/* Conditional rendering based on screen size */}
        <a href="/" className={`p__opensans ${window.innerWidth <= 400 ? 'hidden-on-small-screen' : ''}`} onClick={handleBookingModal}>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
     
      <Modal isOpen={showBookingModal} onRequestClose={handleBookingModal}>
        <h2>Book a Table</h2>
        <div className='book'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={bookingFormData.name} onChange={handleInputChange} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={bookingFormData.email} onChange={handleInputChange} required />
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={bookingFormData.date} onChange={handleInputChange} required />
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" value={bookingFormData.time} onChange={handleInputChange} required />
            <label htmlFor="numberOfPeople">Number of People:</label>
            {/* <input type="number" id="numberOfPeople" name="numberOfPeople" value={bookingFormData.numberOfPeople} onChange={handleInputChange} required />
            <label htmlFor="specialRequests">Special Requests:</label> */}
            <textarea id="specialRequests" name="specialRequests" value={bookingFormData.specialRequests} onChange={handleInputChange}></textarea>
            <button type="submit">Submit</button>
          </form>
          <button onClick={handleBookingModal}>Close</button>
        </div>
      </Modal>
    
    </nav>
  );
};

export default Navbar;