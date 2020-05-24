import genArr from './array-generator';

const difficultyLevel = (difficulty) => {
  switch (difficulty) {
    case 0:
      return {
        info: 'are you kidding me?',
        range: 220,
        lifeSpeed: 100
      };
    case 1:
    case 2:
      return {
        info: 'novice',
        range: 120,
        lifeSpeed: 80
      };
    case 3:
    case 4:
      return {
        info: 'apprentice',
        range: 80,
        lifeSpeed: 60
      };
    case 5:
    case 6:
      return {
        info: 'adept',
        range: 40,
        lifeSpeed: 40
      };
    case 7:
    case 8:
      return {
        info: 'expert',
        range: 20,
        lifeSpeed: 20
      };
    case 9:
    case 10:
      return {
        info: 'master',
        range: 8,
        lifeSpeed: 10
      };
    default:
      throw new Error('Unknown difficulty');
  }
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const zoneGenerator = (difficulty) => {
  const area = genArr([-110, 110]);
  const areaLength = area.length - 1;
  const areaStart = area[0];
  const areaEnd = area[areaLength];

  const { info, range, lifeSpeed } = difficultyLevel(difficulty);
  let hotzoneStart = randomNumber(areaStart, areaEnd);
  let hotzoneEnd = hotzoneStart + range;

  //  checks if the hotzone exceeds the base arrays limits
  if (hotzoneEnd > areaEnd) {
    const diff = hotzoneEnd - areaEnd;

    if (!area.includes(hotzoneStart - diff)) {
      throw new Error(`
        The value ${hotzoneStart - diff} exceeds current array params. 
        Start: ${areaStart} || End: ${areaEnd}`);
    }
    // adjust the hotzone values
    hotzoneStart -= diff;
    hotzoneEnd = hotzoneStart + range;
  }

  const hotzone = genArr([hotzoneStart, hotzoneEnd]);
  const hotzoneLength = hotzone.length;

  if (difficulty === 0) {
    const unlockzone = hotzone;
    return { hotzone, unlockzone, info, lifeSpeed };
  }

  // unlockzone start at 35% of hotzone, ends at 75%
  const unStart = Math.ceil((35 / 100) * hotzoneLength);
  const unEnd = Math.ceil((75 / 100) * hotzoneLength);

  const unlockzone = genArr([hotzone[unStart], hotzone[unEnd]]);

  return {
    hotzone, unlockzone, info, lifeSpeed
  };
};

export default zoneGenerator;

// console.log('unlockzone starts: ', unStart);
// console.log('unlockzone ends: ', unEnd);

// console.log(hotzone);
// console.log(unlockzone);

// console.log('hotzone start: ', hotzoneStart);
// console.log('hotzone end: ', hotzoneEnd);
// console.log('diff: ', diff);
// console.log('hotzone shoul start at: ', hotzoneStart - diff);

// export default zoneGenerator;
