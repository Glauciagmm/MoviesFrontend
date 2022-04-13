getMovies();

function getMovies(){
    fetch('http://localhost:8080/movies')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        printMovies(data);
    });
}


function printMovies (data){
    let moviesList = document.getElementById("main");

    let ulElement = document.createElement("div");

    moviesList.appendChild(ulElement);
    data.forEach(movie => {
       
       let coverImageHtml ='<img src='+movie.coverImage+' class="img-rounded"alt="">'
       let titleHtml = '<h1> '+movie.title+'</h1>'
       let directorHtml= '<p> '+movie.director+'</p>'
       let yearHtml = '<p> '+movie.year+'</p>'
       let synopsisHtml = '<p> '+movie.synopsis+'}</p>'
             
        ulElement.innerHTML += coverImageHtml;
        ulElement.innerHTML += titleHtml;
        ulElement.innerHTML += directorHtml;
        ulElement.innerHTML += yearHtml;
        ulElement.innerHTML += synopsisHtml;
    })
}