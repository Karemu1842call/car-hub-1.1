import Navbar from './components/Navbar';
// import Basket from './components/Basket';
import Cardata from './hooks/Cardata';
import { useState } from 'react';
import Hub from './components/Hub';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const { cars } = Cardata;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (cars) => {
    const exist = cartItems.find((x) => x.id === cars.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === cars.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...cars, qty: 1 }]);
    }
  };
  const onRemove = (cars) => {
    const exist = cartItems.find((x) => x.id === cars.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== cars.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === cars.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Navbar countCartItems={cartItems.length}></Navbar>
      <div className="row">
        <Hub cars={cars} onAdd={onAdd} onRemove={onRemove}></Hub>
        {/* <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket> */}

      </div>
      <Cardata cars={cars}/>
    </div>
  );
}

export default App;
