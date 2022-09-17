let list = document.querySelector('.items--list')
let carousal = document.querySelector('.items--carousal');
let count = 16;

const listOfFoodItems = [
  {
    id: 1,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: "50%"
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
  {
    id: 1,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
  {
    id: 4,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
  {
    id: 5,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
  {
    id: 6,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
  {
    id: 7,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
  {
    id: 8,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
  {
    id: 9,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
  {
    id: 10,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
  {
    id: 11,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
  {
    id: 12,
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "",
    discount: ""
  },
]

listOfFoodItems.forEach((item) => {
  // Declaring the elements
  let element = document.createElement('div');
  let img = document.createElement('img');
  let title = document.createElement('p');
  let rating = document.createElement('div');
  let time = document.createElement('p');
  let price = document.createElement('p');
  let add = document.createElement('button');
  let rowTop = document.createElement('div');
  let rowBottom = document.createElement('div');
  let rowBottomLeft = document.createElement('div');
  let rowBottomRight = document.createElement('div');
  let badge = document.createElement('p');
  let icon = document.createElement('img')
  let star = document.createElement('img')

  // Providing the connection between the elements
  element.appendChild(img);
  element.appendChild(rowTop);
  element.appendChild(rowBottom);
  if(item.discount) element.appendChild(badge);
  rowTop.appendChild(title);
  rowTop.appendChild(price);
  rowBottom.appendChild(rowBottomLeft);
  rowBottom.appendChild(rowBottomRight);
  rowBottomLeft.appendChild(rating);
  rowBottomLeft.appendChild(time);
  rowBottomRight.appendChild(add);
  add.appendChild(icon);

  // Assigning the values based on object data
  title.innerHTML = item.title;
  price.innerHTML = item.price;
  img.src = item.image;
  rating.innerHTML = item.rating;
  time.innerHTML = item.time;
  badge.innerHTML = item.discount
  icon.src = "./assets/icons/add.svg";

  // Assigning the specific classes for the elements
  element.classList.add('items--card')
  img.classList.add('items--image')
  rowTop.classList.add('items--rowtop');
  rowBottom.classList.add('items--rowbottom')
  rowBottomLeft.classList.add('items--rowbottomleft');
  rowBottomRight.classList.add('items--rowbottomright');
  add.classList.add('items--addbutton')
  badge.classList.add('items--badge')

  carousal.appendChild(element);
})

listOfFoodItems.forEach((item) => {
  // Declaring the elements
  let element = document.createElement('div');
  let img = document.createElement('img');
  let title = document.createElement('p');
  let rating = document.createElement('div');
  let time = document.createElement('p');
  let price = document.createElement('p');
  let add = document.createElement('button');
  let rowTop = document.createElement('div');
  let rowBottom = document.createElement('div');
  let rowBottomLeft = document.createElement('div');
  let rowBottomRight = document.createElement('div');
  let badge = document.createElement('p');
  let icon = document.createElement('img')
  let star = document.createElement('img')

  // Providing the connection between the elements
  element.appendChild(img);
  element.appendChild(rowTop);
  element.appendChild(rowBottom);
  if(item.discount) element.appendChild(badge);
  rowTop.appendChild(title);
  rowTop.appendChild(price);
  rowBottom.appendChild(rowBottomLeft);
  rowBottom.appendChild(rowBottomRight);
  rowBottomLeft.appendChild(rating);
  rowBottomLeft.appendChild(time);
  rowBottomRight.appendChild(add);
  add.appendChild(icon);

  // Assigning the values based on object data
  title.innerHTML = item.title;
  price.innerHTML = item.price;
  img.src = item.image;
  rating.innerHTML = item.rating;
  time.innerHTML = item.time;
  badge.innerHTML = item.discount
  icon.src = "./assets/icons/add.svg";

  // Assigning the specific classes for the elements
  element.classList.add('items--card')
  img.classList.add('items--image')
  rowTop.classList.add('items--rowtop');
  rowBottom.classList.add('items--rowbottom')
  rowBottomLeft.classList.add('items--rowbottomleft');
  rowBottomRight.classList.add('items--rowbottomright');
  add.classList.add('items--addbutton')
  badge.classList.add('items--badge')

  list.appendChild(element);
})

// let html = "";

// listOfFoodItems.map((item) => {
//   html += `
//     <div class="items--card>
//       <img src="" >
//       <div>
//       </div>
//     </div>
//   `
// })