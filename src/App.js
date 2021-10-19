import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login/Login';
import Registration from './pages/Login/Registration/Registration';
import NotFound from './pages/404/NotFound'
import Home from './pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Services from './pages/Home/Services/Services';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/service-details/:id/:serviceName">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/about-us">

            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
