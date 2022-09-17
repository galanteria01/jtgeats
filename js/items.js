let list = document.querySelector('.items--list')
let carousal = document.querySelector('.items--carousal');
let count = 16;

const listOfFoodItems = [
  {
    id: 1,
    image: './assets/foods/img1.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: "50%"
  },
  {
    id: 2,
    image: './assets/foods/img2.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: ""
  },
  {
    id: 1,
    image: './assets/foods/img3.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: ""
  },
  {
    id: 4,
    image: './assets/foods/img4.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: ""
  },
  {
    id: 5,
    image: './assets/foods/img5.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: "20%"
  },
  {
    id: 6,
    image: './assets/foods/img4.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: ""
  },
  {
    id: 7,
    image: './assets/foods/img3.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: ""
  },
  {
    id: 8,
    image: './assets/foods/img2.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: ""
  },
  {
    id: 9,
    image: './assets/foods/img5.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
  },
  {
    id: 10,
    image: './assets/foods/img1.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: ""
  },
  {
    id: 11,
    image: './assets/foods/img3.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: ""
  },
  {
    id: 12,
    image: './assets/foods/img5.png',
    title: "Home made pizza",
    price: "₹160",
    rating: "4.7",
    time: "50-79 min",
    discount: ""
  },
]

function generateCard(item, badges) {
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
  let star = document.createElement('img');
  let timecontainer = document.createElement('div')
  let ratingValue = document.createElement('p');

  // Providing the connection between the elements
  element.appendChild(img);
  element.appendChild(rowTop);
  element.appendChild(rowBottom);
  if(item.discount && badges) element.appendChild(badge);
  rowTop.appendChild(title);
  rowTop.appendChild(price);
  rowBottom.appendChild(rowBottomLeft);
  rowBottom.appendChild(rowBottomRight);
  rowBottomLeft.appendChild(rating);
  rowBottomLeft.appendChild(timecontainer);
  rowBottomRight.appendChild(add);
  add.appendChild(icon);
  rating.appendChild(star);
  rating.appendChild(ratingValue);
  timecontainer.appendChild(time)

  // Assigning the values based on object data
  title.innerHTML = item.title;
  price.innerHTML = item.price;
  img.src = item.image;
  ratingValue.innerHTML = item.rating;
  time.innerHTML = item.time;
  badge.innerHTML = item.discount
  icon.src = "./assets/icons/add.svg";
  star.src = "./assets/icons/star.svg"

  // Assigning the specific classes for the elements
  element.classList.add('items--card')
  img.classList.add('items--image')
  rowTop.classList.add('items--rowtop');
  rowBottom.classList.add('items--rowbottom')
  rowBottomLeft.classList.add('items--rowbottomleft');
  rowBottomRight.classList.add('items--rowbottomright');
  add.classList.add('items--addbutton')
  badge.classList.add('items--badge')
  time.classList.add('items--time')
  timecontainer.classList.add('items--timecontainer');
  rating.classList.add('items--rating');
  star.classList.add('items--star')

  return element;
}

listOfFoodItems.forEach((item) => {
  let element = generateCard(item, false);
  carousal.appendChild(element);
})

listOfFoodItems.forEach((item) => {
  let element = generateCard(item, true);
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