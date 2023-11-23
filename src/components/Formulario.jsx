import { useContext, useEffect, useState } from 'react'
import ProductoContext from '../contexts/ProductoContext'
import { useForm } from '../hooks/useForm'
import DragDrop from './DragDrop'
import Swal from 'sweetalert2'
import "./Formulario.scss"



const formInicial = {
  id: null,
  nombre: '',
  precio: '',
  stock: '',
  marca: '',
  categoria: '',
  detalles: '',
  foto: '',
  envio: false,
}

const Formulario = ({ productoAEditar, setProductoAEditar}) => {
  const [foto, setFoto] = useState('')
  const [srcImagen, setSrcImagen] = useState('')

  const [form, setForm, handleChange] = useForm(formInicial)
  const { crearProductoContext, actualizarProductoContext } = useContext(ProductoContext)


  useEffect(() => {
    if ( productoAEditar ) {
      setSrcImagen(productoAEditar.foto)
      setForm(productoAEditar)
    } else {
      setForm(formInicial)
    }
  }, [productoAEditar, setProductoAEditar])

  const validaCamposVacios= (obj) =>{
    let camposVacios = [];
    Object.keys(obj).map((imp)=>{
      if (obj[imp]===""){
        camposVacios.push(imp)
      }
    })
    if (camposVacios.length>0)
    {
      let msg =""
      if (camposVacios.length===1) {
        msg ="El campo " + camposVacios[0] + " es obligatorio."
      }else{
        msg = "Los campos " +camposVacios.shift()
        camposVacios.map((cmp, idx, cpms)=>{
          msg= idx === cpms.length-1? msg + " y "+cmp:  msg + ", "+cmp
        })
        msg = msg.concat(" son obligatorios.")
      }
      Swal.fire({
        icon: "error",
        title: "Faltan campos por completar",
        text: msg
      });
      return true
    }
    return false
  }
  const handleSubmit = async (e) => {
    e.preventDefault() // Detener el comportamiento del formulario
    try {

      const producto = {...form, ...foto}
      if (validaCamposVacios(producto)){
        return 0
      }
      console.log(producto);
      if ( form.id === null ) {
        console.log("crearProductoContext");
        await crearProductoContext(producto)
      } else {
        console.log("actualizarProductoContext");
        await actualizarProductoContext(producto)
      }
      handleReset()
    } catch (error) {
      console.error('Ocurrió un error en el handleSubmit', error)  
    }
    
  }

  const handleReset = ()  => {
    setForm(formInicial)
    setProductoAEditar(null)
    setSrcImagen('')
  }

  return (
    <>
      <div className="editar">
        <div className="editar__title__continer">
          <h2 className="editar__title">{productoAEditar ? 'Editar producto' : 'Agregar producto'}</h2>
          <span className="editar__icono">{productoAEditar ? <i className="fa-solid fa-pen-to-square fa-2xl"></i>:<i className="fa-solid fa-square-plus fa-2xl"></i> }</span>
        </div>
        
        <form className="editar__form" onSubmit={handleSubmit}>
          <div className="editar__form__content">
            <div className="editar__form__imptxt">
              <div className="editar__form__imp">
                <label className="editar__form__txtLbl" htmlFor="lbl-nombre">Nombre</label>
                <input className="editar__form__txtImp" placeholder="Nombre" type="text" name="nombre" id="lbl-nombre" value={form.nombre} onChange={handleChange} />
              </div>
              <div className="editar__form__imp">
                <label className="editar__form__txtLbl" htmlFor="lbl-precio">Precio</label>
                <input className="editar__form__txtImp" placeholder="Precio" type="text" name="precio" id="lbl-precio" value={form.precio} onChange={handleChange} />
              </div>
              <div className="editar__form__imp">
                <label className="editar__form__txtLbl" htmlFor="lbl-stock">Stock</label>
                <input className="editar__form__txtImp" placeholder="Stock" type="text" name="stock" id="lbl-stock" value={form.stock} onChange={handleChange} />
              </div>
              <div className="editar__form__imp">
                <label className="editar__form__txtLbl" htmlFor="lbl-marca">Marca</label>
                <input className="editar__form__txtImp" placeholder="Marca" type="text" name="marca" id="lbl-marca" value={form.marca} onChange={handleChange} />
              </div>
              <div className="editar__form__imp">
                <label className="editar__form__txtLbl" htmlFor="lbl-categoria">Categoría</label>
                <input className="editar__form__txtImp" placeholder="Categoria" type="text" name="categoria" id="lbl-categoria" value={form.categoria} onChange={handleChange} />
              </div>
              <div className="editar__form__imp">
                <label className="editar__form__txtLbl" htmlFor="lbl-detalles">Detalles</label>
                <input className="editar__form__txtImp" placeholder="Detalles" type="text" name="detalles" id="lbl-detalles" value={form.detalles} onChange={handleChange} />
              </div>
              <div className="editar__form__check">
                  <label className="editar__form__checkLbl"htmlFor="lbl-envio">Envío </label>
                  <input className="editar__form__checkbox" type="checkbox" name="envio" id="lbl-envio" checked={form.envio} onChange={handleChange} />
              </div>

              <div className="editar__form__btns">
                <button className="editar__form__submit" type="submit">Guardar</button>
                <button className="editar__form__reset" type="reset" onClick={handleReset}>Limpiar</button>
              </div>
            </div>
            <DragDrop
              setFoto={setFoto}
              setSrcImagen={setSrcImagen}
              srcImagen={srcImagen} 
            />
          </div>
        </form>


      </div>
    </>
  )
}

export default Formulario