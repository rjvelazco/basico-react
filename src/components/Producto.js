import React from 'react';

const Producto = ({producto, productos, carrito, addProducto}) => {

    const {id, nombre, precio} = producto;

    // Agregar producto al carrito
    const seleccionarProducto = (id)=>{
        const producto = productos.filter(producto=>producto.id === id)[0];
        addProducto([
            ...carrito,
            producto
        ]);
    }

    // Elimina un producto del carrito
    const eliminarProducto = id =>{
        const productos = carrito.filter(producto => producto.id !== id);
        addProducto(productos)
    }

    return (
        <div>
            <h2>{nombre} - ${precio}</h2>
            
            {productos
            ?
                (
                    <button
                        type="button"
                        id="comprar"
                        onClick={()=> seleccionarProducto(id)}>
                        Comprar
                    </button>
                )
            : (
                <button
                    type="button"
                    id="comprar"
                    onClick={()=> eliminarProducto(id)}>
                    Eliminar
                </button>
            )}
        </div>
    );
}
 
export default Producto;


