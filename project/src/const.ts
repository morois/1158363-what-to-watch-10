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

export const Genres = [
  'All genres',
  'Comedy',
  'Crime',
  'Comedy-drama',
  'Science Fiction',
  'Fantasy',
  'Gothic',
  'Drama',
  'Psychological Horror',
  'Biography',
];
