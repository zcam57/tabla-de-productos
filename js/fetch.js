const tabla = document.querySelector('#lista-usuarios tbody');

function cargarUsuarios(){
    var contador=0;
    fetch('Tables.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(productos => {
            productos.forEach(producto => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${producto.SKU}</td>
                    <td>${producto.Nombre}</td>
                    <td>${producto.Color}</td>
                    <td>${producto.Talla}</td>
               `;
               if(producto.Nombre == "MEDIAS P/HOMBRE"){
               contador++;
                tabla.appendChild(row); 
              }
              //tabla.appendChild(row); 
              console.log(contador);
               // console.log(usuario.SKU)             
            });
        }) // Aquí mostramos dicha información
        
        
        
        
        .catch(error => console.log('Hubo un error : ' + error.message))



    }

cargarUsuarios();