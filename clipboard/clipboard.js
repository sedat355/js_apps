const container = document.querySelector(".container")
const input = document.querySelector("[data-input]")
const copyButton = document.querySelector("[data-copy-btn]")
const copyButtons = document.querySelectorAll("[data-copy-btn]")
// const copyButtons = document.querySelectorAll(".copy")

console.log(copyButton)

copyButton.addEventListener('click', () => {
  const targetElement = document.querySelector(copyButton.dataset.copy)
  //const textToCopy = targetElement.innerText//veya

  const textToCopy = targetElement.textContent
    .replace(/\s+/g, " ")
    .trim();

  navigator.clipboard.writeText(textToCopy).then(() => {
    const label = copyButton.querySelector('.copy-label')
    const originalText = label.textContent

    copyButton.disabled = true
    label.textContent = "Copied!"

    setTimeout(() => {
      copyButton.disabled = false
      label.textContent = originalText
    }, 1000);
  })
})

//Aşağıdaki forEach çalışmadı nedense ben de tek buton üzerinden yaptım!!
// copyButtons.forEach(copyBtn => () => {
//   copyBtn.addEventListener('click', () => {
//     const targetElement = copyBtn.dataset.copy
//     console.log(targetElement)
//   })
// })

//!Eski yöntem:
// copyBtn.addEventListener('click', copy)

// function copy() {
//   input.select()
//   document.execCommand('copy') 
// }
