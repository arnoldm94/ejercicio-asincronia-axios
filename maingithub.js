


const botonusuario = document.getElementById("usuariogit")
const informaciondiv = document.getElementById ("carta")
const username = document.getElementById ("username")




const getinfouser = () => {

  axios
  .get(`https://api.github.com/users/${username.value}`)
  .then ((res) => { 
    console.log(res.data);
informaciondiv.innerHTML = `
<div class="card" style="width: 18rem;">
  <img src=${res.data.avatar_url} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${res.data.name}</h5>
    <p class="card-text">Numero de Repositorios publicos es de: ${res.data.public_repos}</p>
     </div>
</div>
`
   
  })     
  .catch ((err) => console.error(err)) 


}


botonusuario.addEventListener ("click",getinfouser)


