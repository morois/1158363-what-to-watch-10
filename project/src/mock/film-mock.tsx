import { getRandomInt } from '../utils/common-utils';

export {getRandomInt} from '../utils/common-utils';

interface FilmDataTypeObj {
    title: string,
    picture: string,
}


const filmData: FilmDataTypeObj[] = [
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
  {title: 'Snatch', picture: 'img/snatch.jpg'}
];

const getRandomCardFilm = () => {
  getRandomInt(0, filmData.length);
};

const fimlMock = Array.from({length:5}, getRandomCardFilm);

export {fimlMock, filmData};
