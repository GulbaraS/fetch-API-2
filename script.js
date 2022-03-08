document.addEventListener("DOMContentLoaded", newCard);
    function newCard() {
        fetch("db.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
           // console.log(data);
            let output = "";
            let container = document.createElement('div');
            container.className = "container";
            
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
                            
            });
            document.getElementById("cards").appendChild(container);
        })
            .catch((error) => {
            console.log(error);
           });
    }