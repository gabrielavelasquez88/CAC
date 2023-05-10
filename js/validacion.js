

function validacion() {


    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const direccion = document.getElementById("direccion");
    const ciudad = document.getElementById("ciudad");
    const cp = document.getElementById("cp");
    const nacimiento = document.getElementById("nacimiento");
    const email = document.getElementById("email");
    const pasword = document.getElementById("password");

    const alertNombre= document.getElementById("alert-nombre");
    const alertApellido= document.getElementById("alert-apellido");
    const alertDireccion= document.getElementById("alert-direccion");
    const alertCiudad= document.getElementById("alert-ciudad");
    const alertCp= document.getElementById("alert-cp");
    const alertNacimiento= document.getElementById("alert-nacimiento");
    const alertPasword = document.getElementById("alert-pasword")
    const alertExito= document.getElementById("alert-exito");

    const regNombre =  /^[a-zA-ZñÑáéíóú .]*$/;				
    const regDireccion = /^[A-Za-z áéíóúü0-9]*$/;
    const regCp = /^[A-Za-z0-9]*$/;  

    
    var errores=[]
 
    if (!regNombre.test(nombre.value) || !nombre.value.trim()) {
        
        alertNombre.classList.remove("alert-none");
        
        return false;}
        else {
             alertNombre.classList.add("alert-none");}    
    
    if (!regNombre.test(apellido.value) || !apellido.value.trim()) {
        
        alertApellido.classList.remove("alert-none");
        
        return false;}
    else {
        alertApellido.className="alert alert-none";}   
    if (!regDireccion.test(direccion.value)) {
        
        alertDireccion.classList.remove("alert-none");
        
        return false;}
    else {
        alertDireccion.className="alert alert-none";}   
    if (!regNombre.test(ciudad.value)) {
        
        alertCiudad.classList.remove("alert-none");
        
        return false;}
    else {
        alertCiudad.className="alert alert-none";}   
    if (!regCp.test(cp.value)) {
        
        alertCp.classList.remove("alert-none");
        
        return false;}
    else {
        alertCp.className="alert alert-none";}  
    if (pasword.value.length <= 8) {
        
        alertPasword.classList.remove("alert-none");
        
        return false;    
        
    }else {
        alertPasword.className="alert alert-none"}

        
    alert ("Formulario Enviado");
    return true;    
        
       
}
