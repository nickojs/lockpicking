export default (pickPosition, unlockZone) => {
  const unlockZoneLimit = unlockZone.length - 1;
  const unlockZoneStart = unlockZone[0];
  const unlockZoneEnd = unlockZone[unlockZoneLimit];

  if (unlockZone.includes(pickPosition)) {
    return 0;
  }
  if (pickPosition < unlockZoneStart) {
    return unlockZoneStart - pickPosition;
  }
  if (pickPosition > unlockZoneEnd) {
    return pickPosition - unlockZoneEnd;
  }
};
