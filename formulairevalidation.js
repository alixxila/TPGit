function VerifFormulaire()                                    
{ 
    var form = document.forms["RegForm"]; 
    var name = form["Nom"];                
    var email = form["Email"];      
    var what =  form["Message"];  

    if (name.value == "") { 
        alert("Mettez votre nom."); 
        name.focus(); 
        return false; 
    }         
    
    if (!/\S+@\S+\.\S+/.test(email.value)) { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    
    if (what.selectedIndex < 1) { 
        alert("Mettez votre cours."); 
        what.focus(); 
        return false; 
    } 
    
    return true; 
}