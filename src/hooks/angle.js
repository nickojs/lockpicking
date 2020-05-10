import { useEffect, useState } from 'react';

export default (elementRef, event) => {
  const [internalAngle, setInternalAngle] = useState([]);

  useEffect(() => {
    // element.offset().left + element.width()/2
    // element.offset().top + element.height()/2
    const elementWidth = elementRef.current.offsetWidth;
    const elementHeight = elementRef.current.offsetHeight;

    const elementOffsetLeft = elementRef.current.getBoundingClientRect().left;
    const elementOffsetTop = elementRef.current.getBoundingClientRect().top;
    console.log('[useAngle]: useEffect fired');
    setInternalAngle([elementOffsetLeft + elementWidth / 2, elementOffsetTop + elementHeight]);
  }, [elementRef]);

  // Math.atan2(e.pageX- angle[0],- (e.pageY- angle[1]) )*(180/Math.PI);
  const returnFinalAngle = () => {
    if (!event) return;

    const angle = Math.atan2(
      event.pageX - internalAngle[0], -(event.pageY - internalAngle[1])
    ) * (180 / Math.PI);

    if (angle <= -115 || angle >= 115) return null;

    return angle;
  };

  return returnFinalAngle();
};
