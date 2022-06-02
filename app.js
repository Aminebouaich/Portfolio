let ouvrirBurger = document.querySelector("span")
let fermerBurger = document.querySelector(".closebtn")

ouvrirBurger.addEventListener("click", openNav)

function openNav() {
  document.getElementById("mySidenav").style.width = "250px"

}
fermerBurger.addEventListener("click", closeNav)

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"

}

// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px"; // on a notre fonction avec un event onclick sur notre sapn en HTML quand on clique sur le button la largeur du nav fera 250px
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0"; // Quand on click sur le span où y a la fonction closeNav la largeur du nav passe à 0
// }

// transition vertical
// J'ai utlisé l'objet de L API Intersection Observer VOIR MDN
const ratio = .1
const options = {
  root: null, // c'est l'element racine qui va servir de zone d'affichage et qui nous permmetra de detecter s il est visble ou non dans ce cas je veux que mon élément soi visible dans l'écran dans on met null
  rootMargin: '0px', // ça sert pour dire que l'elemnt doit depasser cette marge pour qu'il devienne visible
  threshold: ratio // le threshold sert à indiquer à partir de quel moment notre élément devient visble ( ligne 11 on indique que je veux que mon élément devient visible a partir de 10% ) si on le met à 1 cela veut dire qu on veut quil devienne visble quand il occupe l'entièté de l'écran 
}

const handleIntersect = function (entries, observer) { // la fonction est appelé quand l'élément devient visible // entries c'est un objet particulier de type "IntersectionObserverentry" 
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) { // on compare intersectionRatio avec le threshold pour afficher ou pas notre élément si intersectionRatio est supérieur du ratio que j'ai défini element devient visible
      entry.target.classList.add('reveal-visible')

      observer.unobserve(entry.target) // la méthode observer permet d'observer l'element commme son nom l'indique contrairtement à unobserver
    }

  })
}


const observer = new IntersectionObserver(handleIntersect, options); //  le premier parametre de notre objet c'est la fonction avec les paramètre "entries et observer "
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r)
})