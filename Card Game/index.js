let cards=[
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:1,
        status:"closed"     //shows wheather card is open or close
    },
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:1,
        status:"closed"     //shows wheather card is open or close
    },
    {
        image:"https://images-na.ssl-images-amazon.com/images/I/61d6m8%2BIjTL._AC_SX425_.jpg",
        value:2,
        status:"closed"     //shows wheather card is open or close
    },
    {
        image:"https://images-na.ssl-images-amazon.com/images/I/61d6m8%2BIjTL._AC_SX425_.jpg",
        value:2,
        status:"closed"     //shows wheather card is open or close
    },
    {
        image:"https://i.pinimg.com/474x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg",
        value:3,
        status:"closed"     //shows wheather card is open or close
    },
    {
        image:"https://i.pinimg.com/474x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg",
        value:3,
        status:"closed"     //shows wheather card is open or close
    },
    {
        image:"https://lumiere-a.akamaihd.net/v1/images/avengers-characterthumbnail-hulk_779919a1.jpeg?region=0%2C0%2C300%2C300",
        value:4,
        status:"closed"     //shows wheather card is open or close
    },
    {
        image:"https://lumiere-a.akamaihd.net/v1/images/avengers-characterthumbnail-hulk_779919a1.jpeg?region=0%2C0%2C300%2C300",
        value:4,
        status:"closed"     //shows wheather card is open or close
    },
    {
        image:"https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg",
        value:5,
        status:"closed"     //shows wheather card is open or close
    },
    {
        image:"https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg",
        value:5,
        status:"closed"     //shows wheather card is open or close
    },
    
]
//durnsten shuffuling algorithm

temp="";
for (let i=cards.length-1 ; i>=0 ; i--){
    let j=Math.floor(Math.random()*(i+1));
    temp = cards[i];
    cards[i]= cards[j];
    cards[j]= temp;
}

let cardsCopy=cards;

function display(data){

    let cardsString="";
    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
        <div class="overlay ${card.status}" onclick="openCards(${index})"></div>
        </div> 
    `;
    });
document.getElementById('cards').innerHTML=cardsString;
}
display(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCards(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount==2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reset after one guess
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("GAME OVER");
            location.reload();
        }

    }

    display(cards);
}
