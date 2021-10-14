import PageMainScreen from '../main/main-page-screen';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import SignInScreen from '../sign-in/sign-in-screen';
import FavoritesPageScreen from '../favorites/favorites-page-screen';
import Error404Screen from '../error-404/error-404-screen';
import PrivateRoute from '../private-route/private-route';
import RoomScreen from '../room/room-screen';

type AppScreenProps = {
  offerCount: number;
}

function App({offerCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <PageMainScreen
            offerCount={offerCount}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesPageScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <RoomScreen />
        </Route>
        <Route>
          <Error404Screen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
