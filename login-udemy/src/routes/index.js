import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../views/Login';
import SearchStaff from '../views/SearchStaff';

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/search" exact>
        <SearchStaff />
      </Route>
    </Router>
  );
}
