import {getRandomInteger, createRandomNumber, getRandomArrayElement} from './util.js';
import {MESSAGE, NAMES, DESCRIPTION} from './consts.js';

const ID = createRandomNumber(1, 25);
const URL = createRandomNumber(1, 25);
const ID_FOR_COMMENTS = createRandomNumber(-Number.MAX_VALUE, Number.MAX_VALUE);

function createUrl(){
  return `photos/${URL}.jpg`;
}


function createDescription(){
  return getRandomArrayElement(DESCRIPTION);
}


function createAvatar(){
  return `img/avatar-${getRandomInteger(1, 6)}.svg`;
}

function createMessage(){
  return Array.from({ length: getRandomInteger(1, 2)}, () => getRandomArrayElement(MESSAGE)).join(' ');
}

function createName(){
  return getRandomArrayElement(NAMES);
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

export {createPhotoDescription};
