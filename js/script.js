var box = document.querySelector('.box')
var btn = document.querySelector('#btn')
var qrInput = document.querySelector('#input')
var qrImg = document.querySelector('#img')
var nav = document.querySelector('#a')

btn.addEventListener('click', () => {
  let qrValue = qrInput.value
  if(!qrValue) return; // Empty
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue} `
  btn.innerText = 'Generating QR Code...'
  qrImg.addEventListener('load', () => {
    box.classList.add('active')
    nav.href = ''
    nav.href = `${qrValue}`
    btn.innerText = 'Gerar QR CODE'
  })  
})


qrInput.addEventListener('keyup', () => {
  if(!qrInput.value){
    box.classList.remove('active')
  }
})