//1 get all the relative dom elements to use for rendering
let objs = {
    body: null,
    inputCity: null,
    btnSearch: null,
    carousel: null,
    preURL: null,
    page: {
        cursor: 1,
        total:1
    },
    prevBtn: null,
    nextBtn: null
}
objs.body = document.querySelector('body');
objs.inputCity = document.querySelector('#inputCity');
objs.btnSearch = document.querySelector('#btnSearch');
objs.carousel = document.querySelector('.gallery');
objs.prevBtn = document.querySelector('#prev');
objs.nextBtn = document.querySelector('#next');

const setKeyEvent = function () {
    objs.inputCity.addEventListener('keyup', cbInputCity);
    
    //add more key events
    objs.body.addEventListener('keyup', function (evt) {
        if (evt.key === 'ArrowRight') {
            nextPage()
        }
        if (evt.key === 'ArrowLeft') {
            prevPage()
        }
    })
    
    let arrEle=[objs.inputCity, objs.prevBtn, objs.nextBtn]
    let evtName=['keyup', 'click', 'click']
    let arrCB=[cbInputCity, prevPage, nextPage]
    arrEle.forEach((ele, index)=>{
        ele.addEventListener(evtName[index], arrCB[index]);
    })

}

const cbInputCity = function (evt) {
    if (evt.key === 'Enter' && objs.inputCity.value.trim().length)
        fetchData();
}

const nextPage = function () {
    if (objs.page.cursor < objs.page.total) {
        objs.page.cursor++;
        fetchData();
    }
}

const prevPage = function () {
    if (objs.page.cursor > 1) {
        objs.page.cursor--;
        fetchData();
    }
}

const updateBgImage = function (url) {
    objs.body.style.background = `url(${url}) no-repeat center center fixed`;
}

const setImageSelected = function (index) {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => {
        item.classList.remove('selected');
    })
    items[index].classList.add('selected');
}

//2 fetch pictures from unsplash api(backend)
const unsplashKey = 'hsKWlcnJg7xCk3n0T2k2y44o2B94V-Q1RgJ4jbhurMA';
const URL = 'https://api.unsplash.com/search/photos?query=';

const fetchData = function () {
    const newCity = objs.inputCity.value.trim().toLowerCase() || 'macbook';
    fetch(`${URL}${newCity}&client_id=${unsplashKey}&orientation=landscape&page=${objs.page.cursor}`)
        .then(res => res.json())
        .then(data => {
            if (data) {
                console.log(data);
                renderImages(data.results);
                objs.page.total = data.total_pages;
            }
        })
}

const renderImages = function (arrImages) {
    //set background image of the body
    const img = arrImages[0].urls.full;
    objs.body.style.background = `url(${img}) no-repeat center center fixed`;
    //create carousel items
    createCarousel(arrImages);

}

const createCarousel = function (arrImages) {
    objs.carousel.innerHTML = '';
    arrImages.forEach((img, index) => {
        const div = document.createElement('div');
        div.className = 'carousel-item';
        const image = img.urls.regular;
        div.style.background = `url(${image}) no-repeat center center fixed`;
        div.dataset.index = index;
        div.dataset.url = img.urls.full;
        objs.carousel.appendChild(div);
        if(index === 0) {
            div.classList.add('selected')
        }
        div.style.animation= `fadeIn 0.3s ${index*0.1}s forwards`
        div.addEventListener('click', function (evt) {
            objs.preURL = evt.target.dataset.url;
            updateBgImage(evt.target.dataset.url);
            setImageSelected(evt.target.dataset.index);
        })

        div.addEventListener('mouseenter', function (evt) {
            let newURL = evt.target.dataset.url;
            const bg = objs.body.style.background;
            const start = bg.indexOf('"');
            const end = bg.lastIndexOf('"');
            objs.preURL = bg.slice(start + 1, end);
            updateBgImage(newURL);
        })
        div.addEventListener('mouseleave', function (evt) {
            updateBgImage(objs.preURL);
        })
    })
}

//3 render the pictures to the dom
objs.btnSearch.addEventListener('click', fetchData);
setKeyEvent();
fetchData();
