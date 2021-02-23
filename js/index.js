'use strict'
const valoracion = document.querySelector('#valoracion')
const valoracionButton = document.querySelector('#valoracionButton')
const cuenta = document.querySelector('#cuenta')
const cuentaButton = document.querySelector('#cuentaButton')
const date = document.querySelector('#date')
const semanaButton = document.querySelector('#semanaButton')

valoracionButton.addEventListener('click', function(){
    alert(`Has valorado con ${valoracion.value}` )
})

cuentaButton.addEventListener('click', function(){
    alert(`Le informamos que su cuenta bancaria es: ${cuenta.value}`)
})

semanaButton.addEventListener('click', ()=>{
    alert(`La fecha seleccionada en el elemento fecha es un ${date.value}`)
})
