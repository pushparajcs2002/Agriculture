import React from 'react';

import { SubHeading } from '../components';
import { images } from '../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="A Farmer is a Magician" />
      <h1 className="app__header-h1">Produces Money from the Mud</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Once in your life you need a doctor, a lawyer, a policeman and a preacher, but every day, three times a day, you need a farmer.
 </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
