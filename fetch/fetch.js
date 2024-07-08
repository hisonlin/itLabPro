//fetch
//1 get data from cloud / backend
//through protocol: http, https
//http is a stateless protocol for fetching resources such as html documents, images, etc
//https://developer.mozilla.org/en-US/docs/Web/HTTP

//how to use fetch
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//API: Application Programming Interface
//connect frontend with backend
//2.1 pre 2015: http request
//XMLHttpRequest
//2.2 post 2015: http request
//fetch()
//return a promise(resolved or rejected)
//.then() (resolved)
//.catch() (rejected)
//fetch is a built-in function in js

//API example
//https://jsonplaceholder.typicode.com/users

const url = 'https://jsonplaceholder.typicode.com/users';
//.then() .catch()
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('error', error));

//async await
//you can stall the data in a variable
let dataArray=[];
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(element => {dataArray.push(element)});

}
fetchData(url);
console.log(dataArray);

//unsplash API
const accessKey = "hsKWlcnJg7xCk3n0T2k2y44o2B94V-Q1RgJ4jbhurMA";
const unsplashUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}`;

//GET /search/photos
let search = "vancouver";
fetch(`${unsplashUrl}&query=${search}&orientation=landscape`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        getImage(data);})
    .catch(error => console.log('error', error));

function getImage(data){
   data.results.forEach(element => {
         let img = document.createElement('img');
         img.src = element.urls.regular;
         document.body.appendChild(img);
   }) 
}

//homework
//use async method to search a picture from unsplash
//add an input
//add a button
//click the button, pass the input value to the search
//after getting the data, the use one picture as the background for the webpage



