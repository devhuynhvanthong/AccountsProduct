import { useState, useEffect } from 'react';
 
function getWindowDimensions() {
  const { innerWidth: width_, innerHeight: height_} = window;
  return {
    height_,
    width_
  };
}
 
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    height_:0,
    width_:0
  });
 
  useEffect(() => {
    setWindowDimensions(getWindowDimensions())
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  return windowDimensions;
}