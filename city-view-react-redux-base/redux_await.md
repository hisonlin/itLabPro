## change city
## Promise.all
fetch multiple sets of data concurrently and handle
them once all of them are received.
Promise.all(requests)
.then(responses => {
const [response1, response2] = responses;
console.log('responses', response1, response2)
dispatch({
type: FETCH_TWO_CITY,
payload: {response1, response2}
})
})
.catch(error => {
// handle errors
console.error(error);
});


##homework:
1. change to async-await, when input city or page change
2. add loading, if there is error, chow reminder;