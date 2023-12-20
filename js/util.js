function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomNumber (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = (min === -Number.MAX_VALUE) ?
      (getRandomInteger(0, max) + getRandomInteger(min, 0)) :
      getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements(getRandomInteger(0, elements.length - 1));

export {getRandomInteger, createRandomNumber, getRandomArrayElement};
