function keyPressed(event){
    console.log("key pressed", event.key)
}

function buttonClicked(input){

    console.log(input)
}

//DOM
//Document Object Model
//It is a programming interface for web documents
//Dom allows Javascript to access and update the content, structure and style of a document
//getElementById
//getElementByClassName
//getElementByTagName
//querySelector, it only returns the first element that matches the query
//querySelectorAll, it returns all elements that match the query, it returns a NodeList

const button1 = document.getElementById('button1')
const name= document.getElementById('name')

button1.addEventListener('click', () => {
    buttonClicked(name.value);
});
//the reason why we use an arrow function is because we want to pass the value of the input field to the buttonClicked function,
//if we use a normal function, the value of the input field will not be passed to the buttonClicked function immediately

//normal function call: functionName()
//when a function is called, the function is executed wherever the function is called
//callback function: functionName
//when a function is passed as an argument to another function or event listener, it is called a callback function
//anonymous function: function(){}
//a function without a name
//can only be used as a callback function

button1.addEventListener('mouseenter', function(event){
    console.log("mouse entered the button", event)
})

//classwork:
//please set a button with the ID "answerButton".
//a div with the ID "answerDisplay"
//when the button is clicked, the event listener is triggered
//a random answer is displayed in the div.
//The answers are stored in an array,and the getRandomAnswer function is used to select a random answer from the array.
const answerButton = document.getElementById('answerButton')
const answerDisplay = document.getElementById('answerDisplay')

const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getRandomAnswer(){
    const randomIndex = Math.floor(Math.random() * answers.length)
    //Math.random() generates a random number between 0 and 1
    answerDisplay.textContent = answers[randomIndex]
}

answerButton.addEventListener('click', getRandomAnswer)
