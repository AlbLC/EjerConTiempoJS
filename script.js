//Usando la API de emojis de GitHub muestra todos los emojis 
//(su imagen en un nodo HTML cada una) que contengan una "y" en su nombre
//(las claves del JSON de respuesta contienen los nombres de los emojis)

// https://api.github.com/emojis

let array = []


    fetch("https://api.github.com/emojis")
        .then((res) => res.json())
        .then((json) => mostrar(json))
  

function mostrar(indice) {

        console.log(indice)

     
       
       

       
      

        
}







