const images=[
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240617-indoor-retreat-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240617-microsoft-copilot-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240513-apple-devices-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240603-prime-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240604-bridgestone-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240610-P10-ppl-GB-wk2-en.jpg',
];

const objs={
    images,
    imageIndex: 0,
    navBarDivs:[]
}

const elements={
    image: document.querySelector('.carousel img'),
    navBar: document.querySelector('.navBar'),
    arrowLeft: document.querySelector('#left'),
    arrowRight:document.querySelector('#right'),
}

//Function to change the background color of the navBarDivs
function changeBackgroundColor(index){
    objs.navBarDivs.forEach((ele,index)=>{
        ele.style.backgroundColor="white"

    })
    objs.navBarDivs[index].style.backgroundColor = "#5F5F5F"
}

//Function to handle the timer, that will change the image every 3 seconds
//It will also change the background color of the corresponding navBarDiv
function timerHandler(){
    objs.imageIndex++
    //If the imageIndex is equal to the length of the images array, then reset the imageIndex to 0
    if(objs.imageIndex === objs.images.length){
        objs.imageIndex = 0;
    }
    elements.image.src=objs.images[objs.imageIndex]
    console.log(objs.imageIndex)
    
    changeBackgroundColor(objs.imageIndex)
    
}

//Functions to start and stop the interval
let imageID;
function startInterval(){
    imageID = setInterval(timerHandler,3000)
   
}

function stopInterval(){
    clearInterval(imageID)
}

//Functions to handle the mouse enter, mouse leave, click events
function cbMouseEnter(){
    let icon= document.querySelector('.icon')
    if(icon.id === 'stop'){
        stopInterval()
    }
}

function cbMouseLeave() {
    let icon= document.querySelector('.icon')
    if(icon.id === 'stop'){
        startInterval()
    }
}

function cbClick(event) {
    let icon= document.querySelector('.icon')
    if(icon.id === 'stop'){
        stopInterval()
        objs.imageIndex = event.target.dataset.divID;
        elements.image.src=objs.images[objs.imageIndex]
        startInterval()
        changeBackgroundColor(event.target.dataset.divID)
    }else{
        objs.imageIndex = event.target.dataset.divID;
        elements.image.src=objs.images[objs.imageIndex]
        changeBackgroundColor(event.target.dataset.divID)
    }
}

function cbClickLeft(){
    let icon= document.querySelector('.icon')
    if(icon.id === 'stop') {
        stopInterval()
        if (objs.imageIndex > 0) {
            objs.imageIndex--
            elements.image.src = objs.images[objs.imageIndex]
            changeBackgroundColor(objs.imageIndex)
        }
        startInterval()
    }else{
        if (objs.imageIndex > 0) {
            objs.imageIndex--
            elements.image.src = objs.images[objs.imageIndex]
            changeBackgroundColor(objs.imageIndex)
        } 
    }
}

function cbClickRight(){
    let icon= document.querySelector('.icon')
    if(icon.id === 'stop') {
        stopInterval()
        if (objs.imageIndex < objs.images.length - 1) {
            objs.imageIndex++
            elements.image.src = objs.images[objs.imageIndex]
            changeBackgroundColor(objs.imageIndex)
        }
        startInterval()
    }else{
        if (objs.imageIndex < objs.images.length - 1) {
            objs.imageIndex++
            elements.image.src = objs.images[objs.imageIndex]
            changeBackgroundColor(objs.imageIndex)
        }
    }
}

function cbClickInterval(){
    let icon= document.querySelector('.icon')
    if(icon.id === 'stop'){
        stopInterval()
        icon.innerHTML='<i class="fa-solid fa-play"></i>'
        icon.id = 'start'
    }else{
        startInterval()
        icon.innerHTML='<i class="fa-solid fa-stop"></i>'
        icon.id = 'stop'
    }
    
    
}

elements.arrowLeft.addEventListener('click', cbClickLeft);
elements.arrowRight.addEventListener('click', cbClickRight);

function createElements(){
    elements.image.src=objs.images[objs.imageIndex]
    elements.image.addEventListener('mouseenter', cbMouseEnter)
    elements.image.addEventListener('mouseleave', cbMouseLeave)
    for(let i =0; i <objs.images.length; i++){
        let eleDiv = document.createElement('div');
        eleDiv.className='navDot'
        elements.navBar.appendChild(eleDiv)
        eleDiv.dataset.divID = i;
        eleDiv.addEventListener('click', cbClick)
        objs.navBarDivs.push(eleDiv)
    }
    let icon = document.createElement('div')
    icon.className='icon'
    icon.id='stop'
    icon.innerHTML='<i class="fa-solid fa-stop"></i>'
    elements.navBar.appendChild(icon)
    icon.addEventListener('click',cbClickInterval)
    changeBackgroundColor(objs.imageIndex)
    startInterval()
}


createElements()

