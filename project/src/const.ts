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
    Film = '/films/{filmId}',
    FilmSimilar = '/films/{filmId}/similar',
    Promo='/promo',
    Favorite='/favorite/FilmId/status',
    Comments='/comments/filmId',
  }

export const TIMEOUT_SHOW_ERROR = 2000;
