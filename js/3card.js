document.addEventListener("DOMContentLoaded", ()=>{
    const card = Array.from(document.getElementsByClassName("card"))
    const img = document.querySelectorAll(".card img")
    const mirai = document.getElementById("mirai")
    const aside = document.querySelector("aside a")
    const third = document.getElementById("see")

  

    const random  = (max,min) => Math.trunc(Math.random() * (max-min) + min);

    let cardkey = [];
    let reverse = [];
    
    for(i=0; i<4; i++){
        const randInt = random(1,79)
        if(cardkey.indexOf(randInt) === -1) {
            cardkey.push(randInt)
        } else {i--;}
    }

    console.log(cardkey)

    
    for(i=0; i<4; i++){
        reverse.push(Math.round(Math.random()))
    }

    let all;
    card.forEach((i,j) =>{
        i.addEventListener("click" , () => {
            all = `images/${cardkey[j]}-${reverse[j]}.jpg`
            i.querySelector("img").setAttribute("src" , all )
        })
        
    },{once:true});

    mirai.addEventListener("click", () =>{
        aside.style.display = "initial"
    })


    aside.addEventListener("click", () => {
        mirai.style.transform = "translateX(0)"
        mirai.style.transition =  "1s"
        third.style.opacity = 1;
        third.style.zIndex = 0;
        third.style.transition = "opacity 1s"
    })

})//end of script