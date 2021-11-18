export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    Favorites = '/favorites',
    Room = '/offer/:id',
}

export enum AuthorizationStatus{
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum PlaceType {
    City = 'CITY',
    Near = 'NEAR',
}
