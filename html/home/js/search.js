var search = document.querySelector('.searchBox')
var navBox = document.querySelector('.navBox')
//导航条宽度小于910，使搜索框消失
window.onresize = function () {
  changeMargin()
}
window.onload = function () {
  changeMargin()
}

function changeMargin() {
  if (navBox.offsetWidth <= 950) {
    search.style.display = 'none'
  } else {
    search.style.display = 'block'
  }
}
