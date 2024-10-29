const btn = document.querySelector(".btn")
const btnCancel = document.querySelector(".btn-cancel")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

overlay.addEventListener('click',() => {
  overlay.classList.remove("open")
  modal.classList.remove('show')
})

btn.addEventListener('click', () => {
  modal.classList.toggle("show")
  overlay.classList.toggle("open")
})
btnCancel.addEventListener('click', () => {
  modal.classList.remove("show")
  overlay.classList.remove("open")
})
