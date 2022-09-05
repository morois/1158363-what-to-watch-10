export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Film = '/films/:filmId',
  FilmSimilar = '/films/{filmId}/similar',
  Promo='/promo',
  Favorite='/favorite',
  FavoriteStatus='/favorite/:filmId/:status',
  Comments='/comments/:filmId',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const FILMS_PER_PAGE = 8;

export const SIMILAR_FILMS_COUNT = 4;

export const REVIEW_TEXT_MIN = 50;

export const REVIEW_TEXT_MAX = 400;

export enum FilmTabTitle {
  Overview = 'OVERVIEW',
  Details = 'DETAILS',
  Reviews = 'REVIEWS'
}

export const RatingLevel = {
  AWESOME: 10,
  VERY_GOOD: 8,
  GOOD: 5,
  NORMAL: 3,
};
