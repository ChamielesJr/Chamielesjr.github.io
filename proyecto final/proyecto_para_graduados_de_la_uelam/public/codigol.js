form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkinputs();
    if(email.value.substring(0,1)==="e" && password.value!==""){

        window.location="homestudiante.html";
    
    }else if (email.value.substring(0,1)==="p" && password.value!==""){
    
       window.location=".html";
    
    }
    })
    
    function checkinputs(){
        const emailValue=email.value.trim();
        const contraValue=password.value.trim();
        if(emailValue==="")
        {
        ErrorEmail(email,"El campo está vacío")
        }else if(checkEmail(emailValue)!==true) 
        {
            ErrorEmail(email,"Email incorrecto")
        }else{
            SuccessEmail(email)
    
        }if(contraValue==="")
        {
            ErrorEmail(password,'El campo está vacío')
        }else{
            SuccessEmail(password)
        }
     }
    
     function checkEmail(valoremail){
        const emailValue=valoremail;
        const newemail=emailValue.substring(0,1);
        
        if(newemail==="e"){
            return true;
        }else if (newemail==="p")
        {
            return true;
        }else{
         return false;
        }
        }
    
    function ErrorEmail(element,message){
        
        const formControl=element.parentElement;
        const small=formControl.querySelector("small")
        formControl.className='content error';
        small.innerText=message;
    }
    
    function SuccessEmail(input){
        const formControl=input.parentElement;
        formControl.className='content success';
    }