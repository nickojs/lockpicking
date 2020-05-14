import { useEffect, useState } from 'react';
import useWindowSize from './window-size';

export default (elementRef, event) => {
  const [internalAngle, setInternalAngle] = useState([]);
  const [finalAngle, setFinalAngle] = useState([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    // checks for element before setting data
    if (elementRef.current) {
      const elementWidth = elementRef.current.offsetWidth;
      const elementHeight = elementRef.current.offsetHeight;

      const elementOffsetLeft = elementRef.current.getBoundingClientRect().left;
      const elementOffsetTop = elementRef.current.getBoundingClientRect().top;
      setInternalAngle([elementOffsetLeft + elementWidth, elementOffsetTop + elementHeight]);
    }
  }, [elementRef, windowSize]);

  useEffect(() => {
    if (!event) return;

    const angle = Math.atan2(
      event.pageX - internalAngle[0], -(event.pageY - internalAngle[1])
    ) * (180 / Math.PI);

    if (angle <= -115 || angle >= 115) return;

    setFinalAngle(Math.ceil(angle));
  }, [event, internalAngle]);

  return finalAngle;
};
