printMoviesList();

function printMoviesList () {
    fetch('http://localhost:8080/movies')
    .then((respuesta)=> { //parsear la respuesta
        return respuesta.json();
    })
    .then((moviesData)=> {

    //Donde quiero imprimir los titulos en el html
    let moviesListElement = document.getElementById('movies');

        for(let i = 0; i<= moviesData.length; i++){

            let nuevoElementHTML = `
                
                        <div class="col">
                            <img class="img-rounded" src="${moviesData[i].coverImage}">
                            <p class="paragraph-title">${moviesData[i].title}</p>
                        </div>
                   
            `
            moviesListElement.innerHTML+= nuevoElementHTML;
            /*
            //Dentro de la section, en un elemento HTML quiero imprimir los datos
            let nuevoElementoHTML = document.createElement('div')

             //Que quiero escribir dentro del elemento div
            nuevoElementoHTML.innerHTML = moviesData[i].title;

            //Añadir el div a la section
            moviesListUlElement.appendChild(nuevoElementHtml)
            */
        }
    })
}


