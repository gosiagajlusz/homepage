
let body = document.body;
//tak się łapie w sposob uproszczony- jak sie wstawia do code pena,bo tam nie ma body z klasa body, ale on wie które to body
let button = document.querySelector(".article__button");
let themeName = document.querySelector(".article__themeName");

button.addEventListener("click", () => {
    body.classList.toggle("pink");
    themeName.innerText = body.classList.contains("pink") ? "biały" : "różowy"


});


