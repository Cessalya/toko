import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route to= "/" component={Home}></Route>
      <Route to= "/products" component={Product}></Route>
      <Route to= "/about" component={About}></Route>
      <Route to="/contact" component={Contact}></Route>

    </Switch>    
    </>
  );
}

export default App;
