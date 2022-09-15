const list = document.querySelector('items--list')
let count = 16;

const listOfFoodItems = [
  {
    id: 1,
    image: './assets/images/img1',
    title: "Home made pizza",
    price: "160",
    rating: "4.7"
  }
]

for(let i=0;i<count;i++) {
  let item = listOfFoodItems[i];
  
}

listOfFoodItems.forEach((item) => {
  let element = document.createElement('div');
  element.className = "items--card"
  let img = document.createElement('img');
  img.src = item.image
  let title = document.createElement('p');
  title.textContent = item.title;
  let rating = document.createElement('div');
  let time = document.createElement('p');
  let price = document.createElement('p');
  let add = document.createElement('button');
  
})