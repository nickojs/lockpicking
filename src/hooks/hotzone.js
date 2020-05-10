import { useEffect, useState } from 'react';

export default (hotzone, keyDown, pickPosition) => {
  const [pickOnHotzone, setPickOnHotzone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const isPickInsideHotzone = hotzone.includes(pickPosition);
      setPickOnHotzone(isPickInsideHotzone);
    }, 500);

    return () => { clearTimeout(timer); };
  }, [keyDown, hotzone, pickPosition]);

  return pickOnHotzone;
};
