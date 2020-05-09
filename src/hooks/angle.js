import { useEffect, useState } from 'react';

export default (ref) => {
  const [angle, setAngle] = useState([]);

  useEffect(() => {
    // element.offset().left + element.width()/2
    // element.offset().top + element.height()/2
    const elementWidthHalf = ref.current.offsetWidth / 2;
    const elementHeightHalf = ref.current.offsetHeight / 2;

    const elementOffsetLeft = ref.current.getBoundingClientRect().left;
    const elementOffsetTop = ref.current.getBoundingClientRect().top;

    setAngle([elementOffsetLeft + elementWidthHalf, elementOffsetTop + elementHeightHalf]);
  }, [ref]);

  // Math.atan2(e.pageX- angle[0],- (e.pageY- angle[1]) )*(180/Math.PI);
  const returnFinalAngle = (event) => Math.atan2(
    event.pageX - angle[0],
    -(event.pageY - angle[1])
    * (180 / Math.PI)
  );

  return returnFinalAngle;
};
