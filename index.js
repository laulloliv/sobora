var prevScrollpos = window.pageYOffset

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('header').style.top = '0'
  } else {
    document.getElementById('header').style.top = '-7em'
  }
  prevScrollpos = currentScrollPos
}

function goHome() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function explore() {
  window.scrollTo({ top: 650, behavior: 'smooth' })
}
