import React from 'react';

const SliderItem = ({ title, description, imageUrl }) => {
  return (
    <li className='item' style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <p className='description'>{description}</p>
        <button>Read More</button>
      </div>
    </li>
  );
};

export default SliderItem;
