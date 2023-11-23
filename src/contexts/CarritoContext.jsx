import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { post } from "../utils/http";
import Swal from 'sweetalert2'
/* CREANDO CONTEXTO */
/* 1er -> Creación del contexto */
const CarritoContext = createContext()
/* 2da -> El armado del Provider */

// const url = 'http://localhost:8080/carrito/'
// const url = 'https://652b59fc4791d884f1fdba84.mockapi.io/api/carrito/'
const url = 'https://bc62130-wilsonquesada-integrador-back.onrender.com/api/carritos/'

const CarritoProvider = ( { children} ) => {
    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito ] = useLocalStorage('carrito', [])

    const [totalCarrito, setTotalCarrito] = useState(0)


    useEffect(() => {
        const tot =carrito.reduce((accumulator, currentValue)  =>
            accumulator + currentValue.cantidad,0
        );
        setTotalCarrito(tot)
    }, [])


    function elProductoEstaEnElCarrito(producto) {
        return carrito.filter(prod => prod.id === producto.id).length
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)
    }

    const agregarCarritoContext = (producto, cant=1) => {
        if(!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = cant;
            agregarAlCarrito(producto)
        } else {
           const productoDeCarrito = obtenerProductoDeCarrito(producto)
           console.log(productoDeCarrito)
           //eliminarDelCarrito(productoDeCarrito.id)
           productoDeCarrito.cantidad+= cant;
           window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
        setTotalCarrito(totalCarrito+cant)
    }

    const eliminarCarritoContext = (idP,idx) => {
        const cant = carrito[idx].cantidad;
        eliminarDelCarrito(idP)
        setTotalCarrito(totalCarrito-cant)
    }

    const guardarCarritoContext = async() => {

        try {
            /* Petición asincronica a nuestro banckend */
            const resultado = await post(url, carrito)
            console.log(resultado)
            /* limpieza del localStorage y limpiamos también el estado */
            vaciarCarrito()
        } catch (error) {
            console.error('Ocurrió un error en guardarCarritoContext()', error)
        }
          
    }

    const vaciarCarrito = () => {
        limpiarCarrito()
        setTotalCarrito(0)  
    }

    const data = {carrito, agregarCarritoContext, eliminarCarritoContext, guardarCarritoContext, totalCarrito,vaciarCarrito}

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

/* 3er -> Exportaciones */
export { CarritoProvider }

export default CarritoContext