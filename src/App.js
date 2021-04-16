import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import ForumPage from "./pages/ForumPage";
import ItemPage from "./pages/ItemPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageCo from "./pages/HomePageWhenConnected";

const App = () => {
  return (
    <Router>
      {" "}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/HomePageCo">
          <HomePageCo />
        </Route>
        <Route path="/ForumPage">
          <ForumPage />
        </Route>
        <Route path="/ProfilePage">
          <ProfilePage />
        </Route>
        <Route path="/SignUpPage">
          <SignUpPage />
        </Route>
        <Route path="/SignInPage">
          <SignInPage />
        </Route>
        <Route path="/ItemPage">
          <ItemPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
