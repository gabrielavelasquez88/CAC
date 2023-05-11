
function validar(){
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const direccion = document.getElementById("direccion");
    const pasword = document.getElementById("password");
    const ciudad = document.getElementById("ciudad");
    const cp = document.getElementById("cp");

    const regNombre =  /^[a-zA-ZñÑáéíóú .]*$/;				
    const regDireccion = /^[A-Za-z áéíóúü0-9]*$/;
    const regCp = /^[A-Za-z0-9]*$/;  
    
    if (!regNombre.test(nombre.value) || !nombre.value.trim()) {
      
        alert("Formato de Nombre Invalido");
        nombre.focus();
        return false;}
                    
    if (!regNombre.test(apellido.value) || !apellido.value.trim()) {
        
        alert ("Formato de Apellido Invalido");
        apellido.focus();
        return false;}
    
    if (!regDireccion.test(direccion.value)) {
        
        alert ("Formato de Direccion Invalido");
        direccion.focus();
        return false;}
    
    if (!regNombre.test(ciudad.value)) {
            
        alert("Formato de Ciudad Invalido")
        ciudad.focus();
        return false;}
       
    if (!regCp.test(cp.value)) {
            
        alert ("Formato de Codigo Postal Invalido")
        cp.focus();
        return false;}
       
    if (pasword.value.length < 8) {
        alert("Minimo 8 caracteres")
        pasword.focus();
        return false;}
        


    alert("Formulario Enviado");
    return true;
}
