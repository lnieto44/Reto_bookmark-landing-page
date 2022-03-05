const hamburgesa = document.querySelector(".contenido_hamburguesa");
const Nav_menu_Features = document.querySelector(".menu_Features");
const List_Nav_menu_Features = document.querySelectorAll(".menu_Features li");
const List_features = document.querySelectorAll(".features-body");
const preguntas = document.querySelectorAll(".question");
const logoContainer = document.querySelector('.logo-container');
const correo = document.querySelector("#form");
const buttonMailto = document.querySelector("#mailto")

let fijador = false;

correo.addEventListener("submit", handleSubmit)

//validacion formulario

function handleSubmit(event){
  event.preventDefault()
  const email = new FormData(this)
  console.log(email.get('email'))
  buttonMailto.setAttribute('href', `mailto:patinho200391@gmail.com?subject=${email.get('email')}`)
  buttonMailto.click()
}

hamburgesa.addEventListener("click", function () {
  const hamburgesa = document.querySelector(".hamburger");
  const List_Nav = document.querySelector(".nav-list");
  fijador = !fijador;
  let srcHam = "./images/icon-hamburger.svg";
  let srcClose = "./images/icon-close.svg";
  hamburgesa.src = fijador ? srcClose : srcHam;
  List_Nav.classList.toggle("active");
  logoContainer.classList.toggle('active');


  //below code will stop body from scrolling when menu is open
  document.body.style.position = fijador ? 'fixed' :'static';


});

List_Nav_menu_Features.forEach((item, index, array) => {
  item.addEventListener("click", () => {
    Nav_menu_Features.querySelector(".active").classList.remove("active");
    item.classList.add("active");

    if (item.classList.contains("one")) {
      List_features[0].classList.add("active");
      List_features[1].classList.remove("active");
      List_features[2].classList.remove("active");
    }

    if (item.classList.contains("two")) {
      List_features[1].classList.add("active");
      List_features[0].classList.remove("active");
      List_features[2].classList.remove("active");
    }

    if (item.classList.contains("three")) {
      List_features[2].classList.add("active");
      List_features[0].classList.remove("active");
      List_features[1].classList.remove("active");
    }
  });
});

preguntas.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});


