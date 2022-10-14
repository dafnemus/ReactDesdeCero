import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../views/Login';
import SearchStaff from '../views/SearchStaff';
import NotFound from '../views/NotFound';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/search" exact>
          <SearchStaff />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
