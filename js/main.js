const PHOTO_DESSCRIPTIONS_COUNT = 25;
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
function createRandomNumber (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const ID = createRandomNumber(1, PHOTO_DESSCRIPTIONS_COUNT);

const URL = createRandomNumber(1, PHOTO_DESSCRIPTIONS_COUNT);
function createUrl(){
  return `photos/${  URL()}.jpg`;
}

const ARRAY_DESCRIPTION = ['ты', 'я', 'мы', 'вы', 'он', 'она', 'оно', 'они'];
function createDescription(){
  return `Это ${  ARRAY_DESCRIPTION[getRandomInteger(0, 7)]}`;
}

const ID_FOR_COMMENTS = createRandomNumber(1, 30*PHOTO_DESSCRIPTIONS_COUNT);
function createAvatar(){
  return `img/avatar-${  getRandomInteger(1, 6)  }.svg`;
}
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
function createMessage(){
  return MESSAGES[getRandomInteger(0, 5)];
}
const NAMES = ['Анатолий', 'Евгений', 'Федор', 'Анна', 'Александр', 'Дмитрий', 'Елена'];
function createName(){
  return NAMES[getRandomInteger(0, NAMES.length)];
}
const createComment = () =>({
  id: ID_FOR_COMMENTS(),
  avatar: createAvatar(),
  message: createMessage(),
  name: createName()
});
function createComments(){
  return Array.from({length: getRandomInteger(0, 30)}, createComment());
}

const createPhotoDescription = () => ({
  id: ID(),
  url: createUrl(),
  description: createDescription(),
  likes: getRandomInteger(15, 200),
  comments: createComments()
});
const photoDescription = Array.from({length: PHOTO_DESSCRIPTIONS_COUNT}, createPhotoDescription);
