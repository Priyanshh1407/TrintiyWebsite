import React from 'react';
import './style.css';
import Slideritem from './Slider_item';
import Slider_controls from './Slider_controls';
// import Slider from './Slider';

const Department_reveal = () => {
  return (
    <div><main>
    <Slideritem
      title="Lossless Youths"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
      imageUrl="apollo.jpg"
    />
    <Slideritem
      title="Lossless Youths"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
      imageUrl="apollo.jpg"
    />
    <Slideritem
      title="Lossless Youths"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
      imageUrl="apollo.jpg"
    />
    <Slideritem
      title="Lossless Youths"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
      imageUrl="apollo.jpg"
    />
    <Slideritem
      title="Lossless Youths"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
      imageUrl="apollo.jpg"
    />
    {/* Add other SliderItem components with different data */}
    <Slider_controls />
  </main></div>
  )
}

export default Department_reveal