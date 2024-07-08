// Create html element in js
// create button
const btn = document.createElement('button');
btn.innerHTML = 'Click Me';
btn.id = 'clickMeBtn';
document.body.appendChild(btn);

//create container
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

//step 1 : get the DOM
const eleContainer = document.getElementById('container');

let counter = 0;
//step 2: create handler
function createH1(){
    counter++;
    //2.1 create element
    const eleH1 = document.createElement('h1');
    //2.2 set innerHTML
    eleH1.innerHTML = '<div style="color: #0f9675">Hi</div>Hello World';
    
    //2.3 show current time
    const currentTime = new Date().getHours() + ':' + 
        new Date().getMinutes() + ':' + 
        new Date().getSeconds();
    const div = document.createElement('div');
    div.innerText = currentTime;
    //2.3 set style
    eleH1.style.backgroundColor = '#f2f2f2';
    //2.4 set color
    eleH1.style.color = changeColor(counter);
    //append elements to parent
    eleContainer.appendChild(eleH1);
    eleContainer.appendChild(div);
    
}

//innerHtml vs innerText
// innerHtml: can add html tags
// innerText: only text

//step 3: add event listener
const eleButton = document.getElementById('clickMeBtn');
eleButton.addEventListener('click', createH1);

function changeColor(index){
    if(index % 2 !== 0){
        return 'red';
    }else {
        return 'blue';
    }
}

//body; document; window
//body: the body is an HTML element that contains all the content of a webpage.
//document: the document object represents the entire HTML document.
//it provides a way to access and manipulate the contents of the web page,
//including the head, body, as well as any other HTML elements on the page
//window: the window object represents an open window in a browser.
//e.g. window.open() will open a new window
//window.close() will close the current window
//windowHeight = window.innerHeight
//windowWidth = window.innerWidth
