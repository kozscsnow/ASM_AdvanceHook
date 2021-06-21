import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About';
import AuthRoute from './components/AuthRoute';
import CartPage from './components/CartPage';
import Contact from './components/Contact';
import DetailListCocktailsPage from './components/DetailListCocktailsPage';
import ListCocktailsPage from './components/ListCocktailsPage';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={ListCocktailsPage} />
        <PrivateRoute exact path="/cart" component={CartPage} />
        <AuthRoute path="/login" component={LoginForm} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <PrivateRoute path="/:drinkID" component={DetailListCocktailsPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
