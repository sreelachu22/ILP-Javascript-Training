const request = fetch('https://dummyjson.com/users/')
console.log(request);

request.then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

const fruits = ['apple', 'banana', 'orange', 'grape', 'melon'];
const fruitsList = document.getElementById('fruitsList');

fruits.forEach((fruit) => {
    const listItem = document.createElement('li');
    listItem.textContent = fruit;
    listItem.classList.add('fruit');
    fruitsList.appendChild(listItem);
})

//!SELECTORS
const fruitsUlItem = document.querySelector('.fruitsList');
    