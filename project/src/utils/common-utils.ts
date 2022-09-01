import {FILMS_PER_PAGE} from '../const';
import {Films} from '../types/films';

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(min < 0) {
    min = 0;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  if (max === min) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRendomElement = (array: any[]) => {
  const randomIndex = getRandomInt(0, array.length - 1);
  return array[randomIndex];
};

const checkIfHasMore = (films: Films, page: number) => (FILMS_PER_PAGE * page) < films.length;

export {getRendomElement, checkIfHasMore};

