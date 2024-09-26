document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card")
    const advice = document.getElementById("advice")
    const img = document.querySelector("#card img")
    const img2 = document.querySelector("#advice img")

    const random  = (max,min) => Math.trunc(Math.random() * (max-min) + min);

    let cardkey = [];
    let reverse = [];
    for(i=0; i<2; i++){
        if(cardkey.indexOf(random(1,79)) === -1)
        cardkey.push(random(1,79))
     else {i--;}
    }
    
    for(i=0; i<2; i++){
        reverse.push(Math.round(Math.random()))
    }



    let major;
    card.addEventListener('click' , () => {
        major = `images/${cardkey[0]}-${reverse[0]}.jpg`;
        img.setAttribute("src" , major);
    }, {once:true} );


    let minor
    advice.addEventListener('click',  () => {
        minor = `images/${cardkey[1]}-${reverse[1]}.jpg`;
        img2.setAttribute("src" , minor);
    }, {once:true})

})//end of script