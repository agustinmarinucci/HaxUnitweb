function datosform (params) {
    let nombre=document.getElementById("form_name").value;
    let apellido=document.getElementById("form_lastname").value;
    let Correo=document.getElementById("form_email").value;
    let videojuego=document.getElementById("form_need").value;
    let comentario=document.getElementById("form_message").value;
    if (nombre=="")  { alert ("Digite su nombre")
    } else {
    if (apellido=="")  { alert ("Digite su apellido")} }
    if (Correo=="")  { alert ("Digite su correo")}
    if (videojuego=="")  { alert ("Elija su videojuego")}
    if (comentario=="")  { alert ("Deje un comentario")};
    let datos = [ { nombre: nombre, apellido: apellido, email: Correo, videojuego: videojuego, comentario: comentario}];
    console.log(datos); 
    localStorage.setItem("datos", JSON.stringify (datos)  )}
let submitbutton = document.getElementById("submitbutton"); 
submitbutton.addEventListener("click", datosform)


