function datosform (params) {
    var nombre=document.getElementById("form_name").value;
    console.log(nombre);
    var apellido=document.getElementById("form_lastname").value;
    console.log(apellido)
    var Correo=document.getElementById("form_email").value;
    console.log(Correo);
    var videojuego=document.getElementById("form_need").value;
    console.log(videojuego);
    var comentario=document.getElementById("form_message").value;
    console.log(comentario)
    if (nombre=="")  { alert ("Digite su nombre")
    } else {
    if (apellido=="")  { alert ("Digite su apellido")} }
    if (Correo=="")  { alert ("Digite su correo")}
    if (videojuego=="")  { alert ("Elija su videojuego")}
    if (comentario=="")  { alert ("Deje un comentario")}
    }