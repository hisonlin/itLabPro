const images=[
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240617-indoor-retreat-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240617-microsoft-copilot-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240513-apple-devices-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240603-prime-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240604-bridgestone-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-240610-P10-ppl-GB-wk2-en.jpg',
    ];

const descriptions=[
    'Indoor',
    'Copilot',
    'Apple',
    'Prime',
    'Bridgestone',
    'Savings'
];

const objs={
    img: document.querySelector('.carousel img'),
    btnBar: document.querySelector('.carousel .btnBar'),
    navPrev: document.querySelector('.btnNav.prev'),
    navNext: document.querySelector('.btnNav.next')
}

const data={
    images : images,
    descriptions: descriptions,
    index:0,
    timerID: null,
    arrButtons: []
}

const cbClick = function(event){
    let {imgID} = event.target.dataset;
    console.log('type:', typeof imgID);
    imgID=Number(imgID);
    data.index = imgID;
    objs.img.src = data.images[data.index];
    updateSelected(data.index);
   
}

const update = function(index){
    updateSelected(index);
    objs.img.src = data.images[index];
    
}

const timerHandler=function(){
    data.index++;
    if(data.index === data.images.length){
        data.index = 0;
    }
    update(data.index);
}
const startAnimate = function(){
    data.timerID = setInterval(timerHandler, 3000);
}

const stopAnimate = function(){
    if(data.timerID){
        clearInterval(data.timerID);
        data.timerID = null;
    }
}

const updateSelected = function(index){
    data.arrButtons.forEach((ele,ind)=>{
        ele.className = '';
        if(ind === index){
            ele.className = 'btnSelected';
        }
    });
};

const cbMouseEnter = function(){
    stopAnimate();
}

const cbMouseLeave = function(){
    startAnimate();

}

const cbPagePrev = function(){
    if(data.index>0){
        data.index--;
        update(data.index);
    }
};

const cbPageNext = function(){
    if(data.index<data.images.length-1){
        data.index++;
        update(data.index);
    }
};

const createCarousel =function(){
    objs.img.src = data.images[data.index];
    objs.img.addEventListener('mouseenter', cbMouseEnter);
    objs.img.addEventListener('mouseleave', cbMouseLeave);
    objs.navPrev.addEventListener('click',  cbPagePrev);
    objs.navNext.addEventListener('click',  cbPageNext);
    
    for(let i=0; i<data.images.length; i++){
        let eleBtn = document.createElement('button');
        eleBtn.innerText = data.descriptions[i];
        eleBtn.dataset.imgID = i;
        eleBtn.addEventListener('click', cbClick);
        objs.btnBar.appendChild(eleBtn);
        data.arrButtons.push(eleBtn);
        if(i===data.index){
            updateSelected(i)
        }
        }
}



createCarousel();
startAnimate();
