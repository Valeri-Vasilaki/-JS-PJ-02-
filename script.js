const entities = [
  {
    title: "Rostov-on-Don, Admiral",
    description:
      "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families",
    img: "./images/image1.jpg",
    city: "Rostov-on-Don <br>LCD admiral",
    repair_time: "3.5 months",
    apartment_area: "81 m2",
    repair_cost: "Upon request",
  },
  {
    title: "Sochi Thieves",
    description:
      "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families",
    img: "./images/image2.jpg",
    city: "Sochi Thieves",
    repair_time: "4 months",
    apartment_area: "105 m2",
    repair_cost: "Upon request",
  },
  {
    title: "Rostov-on-Don Patriotic",
    description:
      "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families",
    img: "./images/image3.jpg",
    city: "Rostov-on-Don <br>LCD Patriotic",
    repair_time: "3 months",
    apartment_area: "93 m2",
    repair_cost: "Upon request",
  },
];

const description = document.querySelector(".description");
const city = document.querySelector(".city");
const apartment_area = document.querySelector(".apartment_area");
const repair_time = document.querySelector(".repair_time");
const repair_cost = document.querySelector(".repair_cost");
const image = document.querySelector(".main_blog__images");

const setEntity = (index) => {
  let entity = entities[index];
  description.innerText = entity.description;
  city.innerHTML = entity.city;
  apartment_area.innerText = entity.apartment_area;
  repair_time.innerText = entity.repair_time;
  repair_cost.innerText = entity.repair_cost;
  console.log(image);
  image.style.backgroundImage = `url(${entity.img})`;
  let activeA = document.querySelector(".header_menu a.active");
  if (activeA) {
    activeA.classList.remove("active");
  }

  let a = document.querySelector("a[data-index='" + index + "']");

  a.classList.add("active");
  
  
  let activeI = document.querySelector("i.active");
  if (activeI) {
    activeI.classList.remove("active");
  }

  let i = document.querySelector("i[data-index='" + index + "']");

  i.classList.add("active");
};

const menu = document.querySelector(".header_menu");
const bubbles = document.querySelector(".bubbles"); 
entities.forEach(function (row, index) {
  const a = document.createElement("a");
  const bubble = document.createElement("i");
  a.innerText = row.title;
  bubble.innerHTML = '&nbsp';
  bubble.addEventListener("click", () => {
    setEntity(index);
  });
  a.addEventListener("click", () => {
    setEntity(index);
  });
  a.dataset.index = index;
  bubble.dataset.index = index;
  menu.appendChild(a);
  bubbles.appendChild(bubble);


});

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dataIndex = document.querySelectorAll("[data-index]");
let currentIndex = 0;

prev.addEventListener("click", () => {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = entities.length - 1;
  }
  setEntity(currentIndex);
});
next.addEventListener("click", () => {
  currentIndex += 1;
  if (currentIndex > entities.length - 1) {
    currentIndex = 0;
  }
  setEntity(currentIndex);
});

setEntity(0);
