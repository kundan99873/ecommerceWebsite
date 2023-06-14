import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import {BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import PaymentPage from './pages/PaymentPage';
import OrderPage from './pages/OrderPage';
import Profile from './pages/Profile';
import OrderView from './pages/OrderView';

function App() {
  return (
    <div className="App">
      <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Home />}/>
          {/* <Route path='/product' element = {<ProductList />}/> */}
          <Route path='/products/:category' element = {<CategoryPage />} />
          <Route path='/products' element = {<ProductList />} />
          <Route path='/product/:id' element = {<ProductPage />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/register' element = {<Register />} />
          <Route path='/cart' element = {<CartPage />} />
          <Route path='/checkout' element = {<Checkout />} />
          <Route path='/myorder' element = {<OrderPage />} />
          <Route path='/payment/:id' element = {<PaymentPage />} />
          <Route path='/profile' element = {<Profile />} />
          <Route path='/order/:id' element = {<OrderView />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
