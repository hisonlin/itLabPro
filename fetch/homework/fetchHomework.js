const userInput = document.querySelector('#userInput');
const searchButton = document.querySelector('button');
const alertMessage = document.querySelector('.alert');

const accessKey = "hsKWlcnJg7xCk3n0T2k2y44o2B94V-Q1RgJ4jbhurMA";
const unsplashUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}`;

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

searchButton.addEventListener('click', async () => {
    const keyword = userInput.value;
    const data = await fetchData(`${unsplashUrl}&query=${keyword}&orientation=landscape`);
    if (keyword === '') {
        alertMessage.style.display = 'block';
        alertMessage.textContent = 'Please enter a keyword';
        setTimeout(() => {
            alertMessage.style.display = 'none';
        }, 2000)
    } else if (data.results.length === 0) {
        alertMessage.style.display = 'block';
        alertMessage.textContent = 'No image found';
        setTimeout(() => {
            alertMessage.style.display = 'none';
            userInput.value = '';
        }, 2000)
    } else {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        document.body.style.backgroundImage = `url(${data.results[randomIndex].urls.full})`
        document.body.style.backgroundSize = 'cover';
        userInput.value = '';
    }
})
