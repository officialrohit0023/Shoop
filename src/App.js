
import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import  { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import m_b from './Components/Assets/Photos/m_b.jpg'
import w_b from './Components/Assets/Photos/w_b.jpg'
import k_b from './Components/Assets/Photos/k_b.jpg'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={m_b} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={w_b} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={k_b}  category="kid"/>}/>
        <Route path='/loginsignup' element={<LoginSignup/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     

    </div>
   
    </Provider>
  );
}

export default App;
