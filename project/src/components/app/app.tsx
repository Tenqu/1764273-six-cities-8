import PageMainScreen from '../main/main-page-screen';

type AppScreenProps = {
  offerCount: number;
}

function App({offerCount}: AppScreenProps): JSX.Element {
  return (
    <PageMainScreen offerCount={offerCount}/>
  );
}

export default App;
