import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import '../../../assets/scss/Food.scss';
import { Icon } from '@blueprintjs/core';

const Profile = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: false,
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },

    spaceBetween: 50,
  };

  return (
    <div className="w3-animate-left">
      <p className="par">Scroll Down To Pick Our Categories</p>
      <Icon icon="double-chevron-down" className="centering" iconSize={25} />
      <Swiper {...params} className="swiper">
        <img
          src="https://media.timeout.com/images/103145295/image.jpg  "
          className="carousel "
        />
        <img
          src="https://media.timeout.com/images/100893103/image.jpg"
          className="carousel"
        />
        <img
          src="https://media.timeout.com/images/101712731/image.jpg"
          className="carousel"
        />
        <img
          src="https://independenttravelcats.com/wp-content/uploads/2018/09/Tazza-D-oro.jpg"
          className="carousel"
        />
        <img
          src="https://theculturetrip.com/wp-content/uploads/2017/01/coffee-bar-star5112-flikr-1024x681.jpg"
          className="carousel"
        />
      </Swiper>
    </div>
  );
};
export default Profile;
