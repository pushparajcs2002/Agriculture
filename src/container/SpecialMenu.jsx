import React from 'react';

import { SubHeading } from '../components';
import { MenuItem } from '../components';
import { data, images } from '../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Farming is not just a job :It's a way of life" />
      <h1 className="headtext__cormorant">Rice Varieties</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">List of Rice</p>
        <div className="app__specialMenu_menu_items">
          {data.Rice.map((Rice, index) => (
            <MenuItem key={Rice.title + index} title={Rice.title} price={Rice.price} tags={Rice.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">List of Seeds</p>
        <div className="app__specialMenu_menu_items">
          {data.Seeds.map((Seeds, index) => (
            <MenuItem key={Seeds.title + index} title={Seeds.title} price={Seeds.price} tags={Seeds.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
