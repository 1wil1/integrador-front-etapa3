import { useContext, useEffect } from 'react'
import './Card.scss'
import CarritoContext from '../contexts/CarritoContext'
import Swal from 'sweetalert2'

const Card = ({ producto }) => {
  const { agregarCarritoContext } = useContext(CarritoContext)
  // console.log(producto)


  const handleClick = async (e) => {
    e.preventDefault()
    const cantAlert= await Swal.fire({
      title: 'Agregar '+producto.nombre +' al carrito',
      icon: 'question',
      input: 'range',
      inputLabel: '¿Cuantas unidades desea agregar?',
      showCancelButton: true,
      inputAttributes: {
        min: 1,
        max: producto.stock,
        step: 1
      },
      inputValue: 1
    })
    if (cantAlert.isConfirmed) {
      agregarCarritoContext(producto,parseInt(cantAlert.value))  
    }
  }

  

  return (
    <a className="card" href="#" onClick={handleClick}>
      <article className="card__article">
        <div className="card__image-container">
          {producto && producto.foto && producto.nombre && <img className="card__image" src={producto.foto} alt={producto.nombre} />}
        </div>
        <div className="card__content">
          {producto && producto.nombre && <h2 className="card__heading">{producto.nombre}</h2>}
          <div className="card__description">
            {producto && producto.detalles && <p>{producto.detalles}</p>}
          </div>
          {producto && producto.stock && producto.stock< 5 && <div className="card__disponible">
            {parseInt(producto.stock)===1 ? <p>Ultima unidad disponible</p>:
            <p>Ultimas {producto.stock} unidades disponibles</p>}
          </div>}
        </div>
      </article>
    </a>
  )
}

export default Card