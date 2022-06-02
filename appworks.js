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
// transition horizontal div 
const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('projet-visible')

            observer.unobserve(entry.target)
        }

    })
}


const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="projet-"]').forEach(function (r) {
    observer.observe(r)
})