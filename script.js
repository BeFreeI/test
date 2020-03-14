function name(selector){
    document.querySelectorAll(selector).forEach((el) => el.addEventListener('click', function () {
    document.querySelectorAll(selector).forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
}));
}

name(".menu a");
name(".portfolio nav li");

let images = [
    "assets/img/portfolio/Project1.png",
    "assets/img/portfolio/Project2.png",
    "assets/img/portfolio/Project3.png",
    "assets/img/portfolio/Project4.png",
    "assets/img/portfolio/Project5.png",
    "assets/img/portfolio/Project6.png",
    "assets/img/portfolio/Project7.png",
    "assets/img/portfolio/Project8.png",
    "assets/img/portfolio/Project9.png",
    "assets/img/portfolio/Project10.png",
    "assets/img/portfolio/Project11.png",
    "assets/img/portfolio/Project12.png",
];

document.querySelectorAll(".portfolio nav li").forEach((el) => el.addEventListener('click', function () {
    images = images.reverse();
    document.querySelectorAll(".portfolio .conteiner img").forEach((el, i) => {
        el.src = images[i];
    });
}));