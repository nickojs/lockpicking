import { useEffect, useState } from 'react';

export default (ref) => {
  const [angle, setAngle] = useState([]);

  useEffect(() => {
    // element.offset().left + element.width()/2
    // element.offset().top + element.height()/2
    const elementWidth = ref.current.offsetWidth;
    const elementHeight = ref.current.offsetHeight;

    const elementOffsetLeft = ref.current.getBoundingClientRect().left;
    const elementOffsetTop = ref.current.getBoundingClientRect().top;

    setAngle([elementOffsetLeft + elementWidth / 2, elementOffsetTop + elementHeight]);
  }, [ref]);

  // Math.atan2(e.pageX- angle[0],- (e.pageY- angle[1]) )*(180/Math.PI);
  const returnFinalAngle = (event) => Math.atan2(
    event.pageX - angle[0], -(event.pageY - angle[1])
  ) * (180 / Math.PI);

  return returnFinalAngle;
};
