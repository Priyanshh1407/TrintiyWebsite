import React from 'react';

const Slider = () => {
  const activate = (e) => {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    
    if (e.target.matches('.next')) {
      slider.append(items[0]);
    }

    if (e.target.matches('.prev')) {
      slider.prepend(items[items.length - 1]);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', activate, false);
    
    return () => {
      document.removeEventListener('click', activate, false);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null; // This component doesn't render anything
};

export default Slider;
