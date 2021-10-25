import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import TopTracksPage from "./pages/TopTracksPage/TopTracksPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import SearchTracksPage from "./pages/SearchTrackPage/SearchTrackPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={TopTracksPage} />
          <Route exact path="/artist/:artistName" component={ArtistPage} />
          <Route exact path="/search" component={SearchTracksPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
