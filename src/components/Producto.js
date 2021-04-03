import React from 'react';

const Producto = ({producto}) => {

    const {id, nombre, precio} = producto;

    // Agregar producto al carrito
    const seleccionarProducto = (id)=>{
        console.log('Comprando...', id);
    }

    return (
        <div>
            <h2>{nombre} - ${precio}</h2>
            <button
                type="button"
                id="comprar"
                onClick={()=> seleccionarProducto(id)}
            >Comprar</button>
        </div>
    );
}
 
export default Producto;


