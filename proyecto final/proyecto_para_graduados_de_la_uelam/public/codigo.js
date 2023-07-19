
envia.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(tarjeta.value!=="" ){
    window.location="cfactura.html";
}
    })

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkinputs();
    })
    
    function checkinputs(){
    const nombreValue=       nombre.value.trim();
    const apellidoValue=   apellido.value.trim();
    const emailValue=         email.value.trim();
    const cedulaValue=       cedula.value.trim();
    const contraValue=   contrasena.value.trim();
    const contra2Value=confirmacion.value.trim();
    
    
    if(nombreValue===""){ /* marcaba error porque deje los parentesis abiertos    , debian estar cerrados*/
        setErrorFor(nombre, "No se permiten campos vacios");
    }else{
        setSuccesFor(nombre);
    }
    if(apellidoValue===""){ 
        setErrorFor(apellido, "No se permiten campos vacios");
    }else{
        setSuccesFor(apellido);
    }
    if(emailValue===""){ 
        setErrorFor(email, "No se permiten campos vacios");
    }else{
        setSuccesFor(email);
    }
    if(cedulaValue===""){ 
        setErrorFor(cedula, "No se permiten campos vacios");
    
    }else if(!validarCedula(cedula.value)){
        setErrorFor(cedula, "El número de cédula ingresado no es correcto");
    }else{
        setSuccesFor(cedula);
    }
    if(contraValue===''){
    setErrorFor(contrasena, 'No se permiten campos vacios')
    }else{
        setSuccesFor(contrasena)
    }
    if(contra2Value===''){
        setErrorFor(confirmacion, 'No se permiten campos vacios')
    }else if(contrasena.value!=confirmacion.value){
        setErrorFor(confirmacion, 'Las contraseñas no coinciden')
    }
    else{
            setSuccesFor(confirmacion)
    }
    
    }
    
    function setErrorFor(input, message){
    const formControl=input.parentElement;
    const small=formControl.querySelector("small")
    formControl.className='form-control error';
    small.innerText=message;
    }
    
    function setSuccesFor(input){
        const formControl=input.parentElement;
        formControl.className='form-control success';
    }
    
    
    
    
    if (!validarCedula(cedula.value))
    {
      console.log(`El número de cédula no es correcto`)
    }
    else
    {
      console.log(`El número es válido.`)
      
    }
    
    function validarCedula(cedula)
    {
      let semaforo=false;
      let suma=0;
      if (cedula.length  != 10 ) return false;
      cedula.substr(0,9).split('').forEach((elemento,indice)=>{
        // if (indice%2==0) {}
        // let numeroActual=0;
        // if (semaforo)  { numeroActual = Number(elemento) } else { numeroActual= Number(elemento)*2 }
        let numeroActual = semaforo ? Number(elemento)  : Number(elemento)*2;
        suma +=  numeroActual>9 ? numeroActual-9 : numeroActual ;
        semaforo= !semaforo;
      })
      while (suma >0) suma -= 10;
    
      // return (Number(cedula.substr(9)) ===suma ||  Number(cedula.substr(9))=== -suma )
      // return Math.abs(suma)===(Number(cedula.substr(9))
      return Number(cedula.substr(9))+ suma  ===0;
    
    
    }

    function redireccionar() {
        window.location.href = 'indexi.html';
    }
    
    /*
    let arra=[nombreValue, apellidoValue, emailValue ,cedulaValue,contraValue,contra2Value]
    for(let i=1;i<10;i++){
    if(arra[i]===""){
        setErrorFor(nombre, "No se permiten campos vacios");
    }else if(contrasena.value!=confirmacion.value){
        setErrorFor(confirmacion, 'Las contraseñas no coinciden')
    }else{
        setSuccesFor(nombre);
    }
    }
    */