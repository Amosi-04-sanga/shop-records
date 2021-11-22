const form = document.querySelector(".form")
const debtorWrapper = document.querySelector(".form__wrapper-hidden")
const borrower = document.getElementById("borrower")

const yes = document.getElementById('yes')
const notCash = document.getElementById('not-cash')
const cash = document.getElementById('cash')


// EVENTS LISTNERS
notCash.addEventListener( 'focus', () => {
    debtorWrapper.style.display = 'block'
})

cash.addEventListener( 'focus', () => {
    debtorWrapper.style.display = 'none'
})

form.addEventListener( 'submit', e => {
  e.preventDefault()
  
  if(yes.checked === true) console.log(`welcome this is new day`);
  if(notCash.checked === true) {
      console.log(`borrower is ${borrower.value}`);
      borrower.value = ''      
  }

  displayMessage('info added successfully!')
})


function displayMessage(msg) {
   const mesgEl = document.querySelector('.form__message')
   mesgEl.textContent = msg
   mesgEl.style.display = 'block'

   setTimeout( () => {
    mesgEl.textContent = ''
    mesgEl.style.display = 'none'
   }, 2000)
}



