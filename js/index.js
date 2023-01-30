const btn = document.getElementById('menu-btn');
const overlay = document.getElementById("overlay");
const menu = document.getElementById("main-menu")
btn.addEventListener("click", navToggle)
const counter = document.querySelectorAll(".counter")
document.addEventListener("scroll", scrollPage)
let scrollStarted = false


function navToggle() {
      btn.classList.toggle("open")
      overlay.classList.toggle("overlayShow")
      document.body.classList.toggle("stop")
      menu.classList.toggle("show-menu")

}
function scrollPage() {
      const scrollPos = window.scrollY
      if (scrollPos > 100 && !scrollStarted) {
            countUp()
            scrollStarted = true

      } else if (scrollPos < 100 && scrollStarted) {
            reset()
            scrollStarted = false


      }

}


function countUp() {
      counter.forEach((counter) => {
            counter.innerText = "0"
            const updateTimer = () => {
                  const target = +counter.getAttribute("data-target")
                  const c = +counter.innerText
                  const increment = target / 100
                  if (c < target) {
                        counter.innerText = `${Math.ceil(c + increment)}`
                        setTimeout(updateTimer, 75)
                  } else {
                        counter.innerText = target
                  }

            }
            updateTimer()

      })

}

function reset() {
      counter.forEach(counter => counter.innerHTML = "0")
}
