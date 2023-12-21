import './function.js';
import {createPhotoDescription} from './data.js';
import {renderThumbnail} from './render-thumbnails.js';
import {addEventListenerToPicture} from './render-big-picture.js';

const picture = createPhotoDescription();
renderThumbnail(picture);
addEventListenerToPicture(picture);
