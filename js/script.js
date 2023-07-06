
{const hello = ()=>{
    console.log("Witam serdecznie zaglądających do konsoli")}
    hello();
}


let body = document.querySelector(".body");
let button = document.querySelector(".article__button");
//przycisk, który przełącz kolory
let colorName = document.querySelector(".article__colorName-js");
//to jest span, w którego innertext się wpisze nazwa 

button.addEventListener("click", () => {
    body.classList.toggle("pink");
    colorName.innerText = body.classList.contains("pink") ? "biały" : "różowy"
    
});

