//Forms
// let hello = document.getElementById('hello').innerHTML="Hello ID"
// let hello2 = document.getElementsByClassName('hello2')[0].innerHTML = 'Hello Class'

document.querySelector('#hello').innerHTML = 'Hello Js'
let firstname = document.querySelector('#firstname')
let lastname = document.querySelector('#lastname')
let submit = document.querySelector('#submit')

submit.addEventListener('click',()=>{
    document.write(`my full name is ${firstname.value} ${lastname.value}`)
})