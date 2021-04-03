import React from 'react';
// Components
import Producto from './Producto';
// CSS
import './carrito.css';


const Carrito = ({carrito, addProducto}) => (
    <div className="carrito">
        <h2>Tu carrito de compras</h2>
        {carrito.length === 0
        
        ? 
        
        <h4>Hoy hay elementos en Carrito</h4>
        
        : carrito.map( producto =>(
            <Producto 
                key      = { producto.id }
                producto = { producto }
                carrito  = { carrito }
                addProducto = {addProducto}
            />
        ))
        }
    </div>
)
 
export default Carrito;