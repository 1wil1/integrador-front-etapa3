import { useContext } from 'react'
import './TablaFila.scss'
import ProductoContext from '../contexts/ProductoContext'
import Swal from 'sweetalert2'

const TablaFila = ( { producto, setProductoAEditar } ) => {
  const { eliminarProductoContext } = useContext(ProductoContext)

  const handleDelete = (id) => {
    console.log("handleDelete:",id);
    Swal.fire({
      title: "Eliminar producto",
      text: `¿Estás seguro de eliminar el producto con el 'id': ${id}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoContext(id)
        Swal.fire({
          title: "Eliminado!",
          text: "El producto ha sido eliminado.",
          icon: "success"
        });
      }
    });
  }

  const handleUpdate = (producto) => {
    console.log("en handleUpdate:",producto);
    setProductoAEditar(producto)
  }

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img id="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button onClick={() => handleUpdate(producto)}><i className="fa-solid fa-pen-to-square fa-lg green"></i></button>
        <button onClick={() => handleDelete(producto.id)}><i className="fa-solid fa-trash fa-lg red"></i></button>
      </td>
    </tr>
  )
}

export default TablaFila