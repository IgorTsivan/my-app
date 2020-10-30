import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Login } from "./pages/Login";
import { Duplicate } from "./pages/1a/Duplicate";
import { Last } from "./pages/1b/Last";
import { Navbar } from "./components/Navbar";
import { Unique } from "./pages/1c/Unique";
import { ParseNPMVersion } from "./pages/1d/ParseNPMVersion";
import { TeamArticles } from "./pages/2a/TeamArticles";

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  let routes = (
    <Switch>
      <Route exact path="/">
        <Login auth={setIsAuth} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  if (isAuth) {
    routes = (
      <>
        <Navbar />
        <Switch>
          <Route path="/duplicate" exact component={Duplicate} />
          <Route path="/last" component={Last} />
          <Route path="/unique" component={Unique} />
          <Route path="/parseNPMVersion" component={ParseNPMVersion} />
          <Route path="/teamArticles" component={TeamArticles} />
          <Redirect to="/duplicate" />
        </Switch>
      </>
    );
  }

  return <>{routes}</>;
};

export default App;
