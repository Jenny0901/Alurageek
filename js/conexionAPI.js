async function listarProductos(){
    const conexion= await fetch("http://localhost:3000/productos");

    const conexionConvertida= conexion.json();

    // console.log(conexionConvertida);
    return conexionConvertida;
}

async function enviarProducto(nombre, precio, img){
    const conexion= await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:precio,
            img:img

        })
    });

    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al agregar el producto");
    }

    return conexionConvertida;
}

async function eliminarProducto(id){
    const conexion= await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    });


    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al agregar el producto");
    }

    return conexionConvertida;
}


export const conexionAPI={
    listarProductos, enviarProducto, eliminarProducto
}