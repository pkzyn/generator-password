let theValor = document.getElementById('valor')
let theSlider = document.getElementById('slider')
let theButton = document.getElementById('button')

let password = document.getElementById('password')
let keyword = document.getElementById('container-keyword')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$&*'
let novaSenha = ''

theValor.innerHTML = theSlider.value

theSlider.oninput = function () {
theValor.innerHTML = this.value
}

function generatePassword () {
 let pass = ''

 for (let i = 0, n = charset.length; i < theSlider.value; ++i){
   pass += charset.charAt(Math.floor(Math.random() * n))
 }


 keyword.classList.remove('hide')
 password.innerHTML = pass
 novaSenha = pass
}

function copyPassword () {
  alert('Nova senha copiada com sucesso!')
  navigator.clipboard.writeText(novaSenha)
}


