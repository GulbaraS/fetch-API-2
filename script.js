
  fetch("db.json")
  .then((res) => {
   return res.json();
  })

  .then((data) => {

  let output = "";
  let container = document.createElement('div');
  container.className = "container";
  document.getElementById("cards").appendChild(container);
            
  data.forEach((elem) => {

  let cards = document.createElement("div");
  cards.className = "cards";
  container.appendChild(cards);

  let img = document.createElement("img");
  img.src = elem.img;
  img.className = "img";
  cards.appendChild(img);

  let itemInfo = document.createElement("div");
  itemInfo.className = "item-info";
  cards.appendChild(itemInfo);
              
                              
  let title=document.createElement('h3');
  title.innerText=elem.title;
  title.className = "title";
   itemInfo.appendChild(title);


  let price = document.createElement('p');
  price.innerText = elem.price +` сом`;
  itemInfo.appendChild(price);
                
  let desc = document. createElement("p");
  desc.className = "desc";
  desc.innerText =elem.desc;
  cards.appendChild(desc);

const btnAll = document.querySelector(".btn-all");
const btnLaptops = document.querySelector(".btn-laptops");
const btnPhones = document.querySelector(".btn-phones");
const btnTv = document.querySelector(".btn-tv");


btnAll.addEventListener("click", () => {
 if (elem.category === "") {
 cards.style.display = "none";
 } else {
  cards.style.display = "block";
 }
});

btnLaptops.addEventListener("click", () => {
 if (elem.category === "laptops") {
 cards.style.display = "block";
} else {
 cards.style.display = "none";
}
});

btnPhones.addEventListener("click", () => {
 if (elem.category === "phones") {
 cards.style.display = "block";
}else{
 cards.style.display = "none"
}
});   

 
btnTv.addEventListener("click", () => {
 if (elem.category === "tv") {
 cards.style.display = "block";
} else {
 cards.style.display = "none"
}
});
                            
});

})

.catch((error) => {
 console.log(error);
});


