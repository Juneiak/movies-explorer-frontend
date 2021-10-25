import React from 'react';

const getWindowDimensions = () => {
  const { innerHeight: height, innerWidth: width } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [ windowDimensions, setWindowDimensions ] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return windowDimensions;
}

export default useWindowDimensions;