
{const hello = ()=>{
    console.log("Witam serdecznie zaglądających do konsoli")}
    hello();
}


let body = document.querySelector(".body");
let button = document.querySelector(".article__button");
//przycisk, który przełącz kolory
let nextColorName = document.querySelector(".article__nextColorName-js");
//to jest span, w którego innertext się wpisze nazwa 

button.addEventListener("click", () => {
    //
    body.classList.toggle("pink");
    //przełącz klasę jeśli klasa jest pink
    nextColorName.innerText = body.classList.contains("pink") ? "biały" : "różowy"
    //spanowi wewnątrz button zmienia tekst-jeżeli zawiera pink
    //to zmienia na biały a jak nie to różowy
});

