//      https://dog.ceo/dog-api/
// https://dog.ceo/api/breeds/list/all
/*  imagen random de una raza especifica:
https://dog.ceo/api/breed/XXXXXX/images/random */
/* imagen random de varias razas:
https://dog.ceo/api/breed/hound/images */

const botonget = document.getElementById("get")
const botonrandom = document.getElementById("random")
const botonall = document.getElementById("all")
let perros = []
const container = document.getElementById ("container")
const raza = document.getElementById ("razarandom")
const imagenesdiv = document.getElementById ("imagenes")

const obtenerparametros = () => {
axios
.get('https://dog.ceo/api/breeds/list/all')
.then ((res) => { console.log(res.data.message);
})     
.catch ((err) => console.error(err)) 
}


const imagenrandom = () => {

  axios
  .get(`https://dog.ceo/api/breed/${raza.value}/images/random`)
  .then ((res) => { 
imagenesdiv.innerHTML = ""
    imagenesdiv.innerHTML = `<img src=${res.data.message} alt="">`
   
  })     
  .catch ((err) => console.error(err)) 


}


const todasimagenesderaza = () => {

  axios
  .get(`https://dog.ceo/api/breed/${raza.value}/images`)
  .then ((res) => { 
    imagenesdiv.innerHTML = ""
    res.data.message.forEach(element => {
      imagenesdiv.innerHTML += `<img src=${element} alt="">`
    });
      
  })     
  .catch ((err) => console.error(err)) 


}





const look = () => {console.log(perros)
    perros.forEach(a => {
    container.innerHTML += `<h1>${a.name}</h1>`
})
}

botonget.addEventListener ("click",obtenerparametros)
botonrandom.addEventListener ("click",imagenrandom)
botonall.addEventListener ("click",todasimagenesderaza)

