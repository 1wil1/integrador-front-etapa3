import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar";
import HeaderTitle from "./HeaderTitle";
import CarritoContext from "../contexts/CarritoContext";
import { useContext } from "react";
import ProductoContext from "../contexts/ProductoContext";

const Header = () => {
  const { totalCarrito } = useContext(CarritoContext)
  const { productos, filtrarProductos, qbuscar, setQBuscar} = useContext(ProductoContext)
  function fcBuscar(event){
    event.preventDefault();
    filtrarProductos()
  }
  function handleChangeBuscar(event){
    setQBuscar(event.nativeEvent.data? qbuscar + event.nativeEvent.data:"")
  }
  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <Navbar />
      <div className="search-bar">
        <div className="search-bar__logo-container">C-ON</div>
        <form action="" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label">
            Buscar
          </label>
          <input type="search" className="search-bar__form-search" id="busqueda" value={qbuscar} onChange={handleChangeBuscar}/>
          <input type="submit" value="🔍" className="search-bar__form-submit" onClick={fcBuscar}/>
        </form>
        <Link className="search-bar__carrito-container" to="/carrito">
          <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          <div className="search-bar__carrito-counter">{parseInt(totalCarrito)}</div>
        </Link>
        <div className="menu-toggle">
          <label htmlFor="menu" className="menu-toggle__label">
            <span className="menu-toggle__top-bread"></span>
            <span className="menu-toggle__meat"></span>
            <span className="menu-toggle__bottom-bread"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
