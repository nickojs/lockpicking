import { useEffect, useState } from 'react';

export default (hotzone, pickPosition) => {
  const [pickOnHotzone, setPickOnHotzone] = useState(false);

  useEffect(() => {
    const isPickInsideHotzone = hotzone.includes(pickPosition);
    setPickOnHotzone(isPickInsideHotzone);
  }, [hotzone, pickPosition]);

  return pickOnHotzone;
};
