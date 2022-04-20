function validarNombre()
{
    var nombreIngresado = document.querySelector("[data-form-nombre]");
    var nombre = nombreIngresado.value.trim();
    nombreIngresado.value = nombre;
    if(nombre.length == 0)
        {
        alert("El nombre no puede estar vacio"); 
        
        }

    if(nombre.length>50)
        {
            alert("El campo nombre no puede tener mas de 50 caracteres");
            nombreIngresado.value = " ";
        }
        
}
