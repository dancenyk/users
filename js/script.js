/*

Aprovecha para usar:

Destructuring
spread operator. Crea un nuevo array con el objeto y con los nuevos datos a añadir (age, img, address con los nuevos datos)
Modifica el archivo styles.css para cambiar estilos.
Ajusta el archivo script.js para mostrar diferentes detalles de usuarios según tus necesidades.


*/
const listaUsuarios = document.getElementById("listaUsuarios");

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function mostrarPersona(){
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json()
    .then((data)=>{
      console.log(data)
      data.forEach((persona)=>{
        let age = randomAge(30,50);
        const template =`
        <li>
        <div class="tarjeta">
          <div class="cabecera">   
            <div class="infoPersonal">
              <b>Nombre:</b> ${persona.name}<br>
              <b>Edad:</b> ${age}<br>
              <b>Username:</b> ${persona.username}<br>
              <b>Teléfono:</b> ${persona.phone}<br>
              <b>Email:</b> ${persona.email}<br>
            </div>
            <div>
            <img src= "assets/img/${persona.id}.jpeg" alt="${persona.name}">
            </div>
          </div>
          <div class="infoSecudaria">
          <b>Company:</b> ${persona.company.name}<br>
          <b>Dirección:</b> ${persona.address.street}, ${persona.address.suite}, ${persona.address.city}
          </div>
        </div>
        </li>
        `    
        listaUsuarios.innerHTML += template
      }); 
    })
    )
}
mostrarPersona ()







