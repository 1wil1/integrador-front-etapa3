import { useEffect, useState } from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import HeaderTitle from '../components/HeaderTitle'
import "./Alta.scss"

const Alta = () => {
  const [productoAEditar, setProductoAEditar] = useState(null)

  useEffect(() => {
    console.log("useEffect alta",productoAEditar);
    
  }, [productoAEditar, setProductoAEditar])

  return (
    <>
      
      <section className="section-alta">
        <HeaderTitle title="Formulario de alta de productos" ></HeaderTitle>
        <Formulario productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} />
        <hr />
        <Tabla setProductoAEditar={setProductoAEditar} />
      </section>
      
    </>
  )
}

export default Alta