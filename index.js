
document.addEventListener('DOMContentLoaded', event => {
    
    getDate();
}) 

let nasaFun = function(addDate) {
    let url = "https://api.nasa.gov/planetary/apod?api_key=feekrodts3wqORjT8ZkdMgr1WHJ1dq55QpD1Ibb6&"
    fetch(url + addDate)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        addImage(json[0].url);
        addTitle(json[0].title);
        addDescription(json[0].explanation);
        // console.log(json)
    })
    .catch(function(error) {
        let errorMessage = "Please select a valid date"
        let errorElement = document.createElement('h1')
        errorElement.innerText = errorMessage
        document.getElementById('img').appendChild(errorElement)
    })
}

let getDate = function() {
    let submit = document.getElementById('button')
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        
        let year = document.getElementById('year').value
        let month = document.getElementById('month').value
        let day = document.getElementById('day').value
        let date = `${year}-${month}-${day}`
        let addDate = `start_date=${date}&end_date=${date}`

        nasaFun(addDate)
    })
}

let addImage = function(imageURL) {
    let element = document.getElementById('showtime')
    element.src = imageURL
}

let addTitle = function(title) {
    let imageTitle = document.getElementById('title')
    imageTitle.innerText = title
}

let addDescription = function(description) {
    let imageDescription = document.getElementById('description')
    imageDescription.innerText = description
}
