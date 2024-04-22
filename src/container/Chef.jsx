import React from 'react';

import { SubHeading } from '../components';
import { images } from '../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Farmer's World" />
      <h1 className="headtext__cormorant">Farming is a profession of hope
</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">To make agriculture sustainable, the grower has got to be able to make a profit.</p>
        </div>
        <p className="p__opensans"> The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings.The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways </p>
      </div>

    </div>
  </div>
);

export default Chef;
