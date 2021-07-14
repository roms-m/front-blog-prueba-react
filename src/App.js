import Settings from './pages/settings/settings';
import Header from './components/header/header';
import Login from './pages/login/login';
import Home from './pages/home/home';
import { Context } from './context/context';
import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  const { user} = useContext(Context);

  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          { user ? <Home /> : <Login />}
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
