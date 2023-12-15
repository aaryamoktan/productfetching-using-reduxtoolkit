import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './Component/Cart';
import Dash from './Component/Dash';
import { createBrowserRouter,createRoutesFromElements,RouterProvider ,Route} from 'react-router-dom';
import { Product } from './Component/Product';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Dash/>}>
<Route index element={<Product/>}/>
<Route path="/cart" element={<Cart/>}/>
</Route>
  ))
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
