

//      https://jsonplaceholder.typicode.com/users


const botonget = document.getElementById("get")
const botonmira = document.getElementById("look")
let users = []
const container = document.getElementById ("container")

const obtenerparametros = () => {
axios
.get('https://jsonplaceholder.typicode.com/users')
.then ((res) => { console.log(res.data);
   let universaldata = res.data;
     universaldata.forEach(element => {
   console.log(element.name)
       users.push(element) });
})
.catch ((err) => console.error(err)) 

}


const look = () => {console.log(users)
    users.forEach(a => {
    container.innerHTML += `<h1>${a.name}</h1>`
})
}

botonget.addEventListener ("click",obtenerparametros)
botonmira.addEventListener ("click",look)