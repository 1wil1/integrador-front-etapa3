import { createContext, useEffect, useState } from "react";
import { del, get, post, put } from "../utils/http";

/* Creando CONTEXTO */
/* 1er -> Creación del contexto */
const ProductoContext = createContext()

/* 2do -> El armado del Provider */
// const url = 'http://localhost:8080/productos/'
// const url = 'https://652b59fc4791d884f1fdba84.mockapi.io/api/productos/'
const url = 'https://bc62130-wilsonquesada-integrador-back.onrender.com/api/productos/'

const ProductoProvider = ( { children } ) => {
    const [productos, setProductos] = useState([])
    const [productosFiltro, setProductosFiltro] = useState([])
    const [qbuscar, setQBuscar] = useState("")

    useEffect(() => {
        obtenerProductos()
    }, []) // <= Array vacío hace solo una petición


   const filtrarProductos= (prdos= productos) => {
    const buscar = qbuscar.toUpperCase()
    let prodFiltrados=prdos.filter((prod)=>{
        console.log(prod);
        return  prod, prod.nombre.toUpperCase().includes(buscar)||
                prod.marca.toUpperCase().includes(buscar) || 
                prod.categoria.toUpperCase().includes(buscar)
    })
    setProductosFiltro(prodFiltrados)
   }

   const obtenerProductos = async () => {
    try {
        const products = await get(url)
        setProductos(products)
        setProductosFiltro(products)
        
    } catch (error) {
        console.error(`ERROR obtenerProductos: ${error}`)
    }
   }

   const crearProductoContext = async (productoNuevo) => {
    try {
        // Hago la petición (Guardo producto backend)
        const productoBackNuevo = await post(url, productoNuevo)
        console.log(productoBackNuevo);
        // Actualizar el estado con el nuevo producto
        const nuevaDB=[...productos, productoBackNuevo]
        setProductos(nuevaDB)
        filtrarProductos(nuevaDB)
    } catch (error) {
        console.error('Falló crearProductoContext', error)
    }
   }

   const actualizarProductoContext = async (productoEditar) => {
    try {
        const productoEditado = await put(url, productoEditar.id, productoEditar)
        console.log(productoEditado)
        const nuevaDB = productos.map( producto => producto.id === productoEditado.id ? productoEditado : producto )
        setProductos(nuevaDB)
    } catch (error) {
        console.log('ERROR en actualizarProductoContext', error)
    }
   }

   const eliminarProductoContext = async (id) => {
    try {
        const productoEliminado = await del(url, id)
        console.log(productoEliminado) // {}
        const nuevaDB = productos.filter(producto => producto.id !== id)
        setProductos(nuevaDB)
        filtrarProductos(nuevaDB)
    } catch (error) {
        console.log('Todo salió mal en el eliminarProductoContext', error)
    }
   }

    const data = { productos, crearProductoContext, eliminarProductoContext, actualizarProductoContext, productosFiltro, filtrarProductos , qbuscar, setQBuscar}

    return <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
}

/* 3er -> Exportaciones */
export { ProductoProvider }

export default ProductoContext
