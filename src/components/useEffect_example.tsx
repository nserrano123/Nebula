import React, { useState, useEffect } from 'react';

const InteractiveRectangle: React.FC = () => {
  const [isBlue, setIsBlue] = useState<boolean>(false);

  // Debounce function to limit how often we update the state
  const debounce = (func: Function, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  useEffect(() => {
    // Function to handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      // Get the window width
      const windowWidth: number = window.innerWidth;
      // Check if mouse position is past halfway point
      const isPastHalfway: boolean = event.clientX > windowWidth / 2;

      // Update the state only if the color needs to change
      if (isBlue !== isPastHalfway) {
        setIsBlue(isPastHalfway);
      }
    };

    // Create a debounced version of the handleMouseMove function
    const debouncedHandleMouseMove = debounce(handleMouseMove, 10);

    // Add event listener when component mounts
    window.addEventListener('mousemove', debouncedHandleMouseMove);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('mousemove', debouncedHandleMouseMove);
    };
  }, [isBlue]); // Depend on `isBlue` so we only update when necessary

  // Styles for the rectangle
  const rectangleStyle: React.CSSProperties = {
    width: '200px',
    height: '200px',
    backgroundColor: isBlue ? 'blue' : 'orange',
    margin: '20px auto',
    transition: 'background-color 0.3s ease', // Smooth color transition
  };

  return (
    <div>
      <h2>Interactive Rectangle</h2>
      <p>Move your mouse across the screen to change the color!</p>
      <div style={rectangleStyle}></div>
    </div>
  );
};

export default InteractiveRectangle;
