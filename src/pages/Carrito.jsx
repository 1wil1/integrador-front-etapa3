import { useContext, useEffect } from "react";
import "./Carrito.scss";
import CarritoContext from "../contexts/CarritoContext";
import HeaderTitle from "../components/HeaderTitle";

const Carrito = () => {
  const { carrito, eliminarCarritoContext, guardarCarritoContext, vaciarCarrito } = useContext(CarritoContext)

  const handleEliminar = (idProd, idx ) => {
    //console.log(id)
    eliminarCarritoContext(idProd, idx)
  }

  const calcularTotal = () => {
    let sumaTotal = carrito.reduce((total, prod) => {
      return total + (prod.precio * prod.cantidad)
    }, 0)
    return sumaTotal
  }

  const handleComprar = () => {
    guardarCarritoContext()
  }

  return (
    <>
      <HeaderTitle title={"Listado de productos en el carrrito"}/>
      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            carrito.length <= 0 ? (
              <tr>
                <td colSpan={5} style={{textAlign: 'center'}}><strong>No hay productos</strong></td>
              </tr>
            ) : (
              carrito.map((producto, idx) => (
                <tr key={idx}>
                  <td>
                    <img src={producto.foto} alt={producto.nombre} width="50px" />
                  </td>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio}</td>
                  <td>
                    <button onClick={() => handleEliminar(producto.id, idx)}><i className="fa-solid fa-trash fa-2xl"></i></button>
                  </td>
                </tr>
              ))
            )
          }
          <tr>
            <td colSpan={3}><strong>Total</strong></td>
            <td><strong>${parseFloat(calcularTotal()).toFixed(2)}</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      { !carrito.length <= 0 && 
      <div className="Opciones-carrito">
        <button onClick={handleComprar}>Comprar</button>
        <button onClick={vaciarCarrito}>Vaciar</button>
      </div>
      }
    </>
  );
};

export default Carrito;
