import './App.css';
import LoginForm from './components/LoginForm';
import { Switch, Route } from 'react-router';
import ListCocktailsPage from './components/ListCocktailsPage';
import AuthRoute from './components/AuthRoute';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import About from './components/About';
import Contact from './components/Contact';
import DetailListCocktailsPage from './components/DetailListCocktailsPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={ListCocktailsPage} />
        <PrivateRoute exact path="/cart" component={CartPage} />
        <AuthRoute path="/login" component={LoginForm} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <PrivateRoute  path="/:drinkID" component={DetailListCocktailsPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
