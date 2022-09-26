import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import store from "./redux/store";
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ProductList />
        <Cart/>
      </div>
    </Provider>
  );
}

export default App;
