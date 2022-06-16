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
    }


    const scriptURL = 'https://script.google.com/macros/s/AKfycbxfirqPZS5kI1O346TPG35nVzewqC5w4SXCMb-XLHIozzCrTXqszQfgWQ9yICkyYGjl4A/exec'
    const form = document.forms['submit-form']
    
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
