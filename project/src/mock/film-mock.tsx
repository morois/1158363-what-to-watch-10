import { getRendomIndexArr, getRandomInt } from '../utils/common-utils';

const FILM_VALUE = 20;

export interface Film {
    title: string,
    picture: string,
}

interface FilmEntry extends Film {
  id: string;
}

const filmMocks: Film[] = [
  {title: 'Macbeth', picture:'img/macbeth.jpg'},
  {title: 'Aviator', picture: 'img/aviator.jpg'},
  {title: 'Bohemian Rhapsody', picture: 'img/bohemian-rhapsody.jpg'},
  {title: 'Midnight Special', picture: 'img/midnight-special.jpg'},
  {title: 'We need to talk about Kevin', picture: 'img/we-need-to-talk-about-kevin.jpg'},
  {title: 'What We Do in the Shadows', picture: 'img/what-we-do-in-the-shadows.jpg'},
  {title: 'Johnny English', picture: 'img/johnny-english.jpg'},
  {title: 'Revenant', picture: 'img/revenant.jpg'},
  {title: 'Shutter Island', picture: 'img/shutter-island.jpg'},
  {title: 'Pulp Fiction', picture: 'img/pulp-fiction.jpg'},
  {title: 'No Country for Old Men', picture: 'img/no-country-for-old-men.jpg'},
  {title: 'Snatch', picture: 'img/snatch.jpg'},
  {title: 'Moonrise Kingdom', picture: 'img/moonrise-kingdom.jpg'},
  {title: 'Seven Years in Tibet', picture: 'img/seven-years-in-tibet.jpg'},
  {title: 'War of the Worlds', picture: 'img/war-of-the-worlds.jpg'},
  {title: 'Dardjeeling Limited', picture: 'img/dardjeeling-limited.jpg'},
  {title: 'Orlando', picture: 'img/orlando.jpg'},
  {title: 'Mindhunter', picture: 'img/mindhunter.jpg'}
];

const getRandomCardFilm = (_value: never, key: number): FilmEntry => ({
  ...filmMocks[getRendomIndexArr(filmMocks)],
  id: key.toString(),
});

const filmMock = Array.from({length: FILM_VALUE}, getRandomCardFilm);

export {filmMock, filmMocks};
