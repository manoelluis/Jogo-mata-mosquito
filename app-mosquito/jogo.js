var altura = 0
var largura = 0
var vidas = 1
var tempo = 5

function mudatamanho () {
	altura = window.innerHeight
	largura = window.innerWidth	

	console.log(altura, largura)
}
mudatamanho()



var cronometro = setInterval(function() {
	
	tempo -=1
	if(tempo < 0) {

		clearInterval(cronometro)
		clearInterval(criamosca)
		
		alert('vitoria')
	} else {

	document.getElementById('cronometro').innerHTML = tempo
	}
} ,1000)

	
function posicaoRandomica () {

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3){
			window.location.href = 'fim_de_jogo.html'
		} else {
		document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'

		vidas++
		}
	}

	var posicaox = Math.floor(Math.random() * largura) - 100
	var posicaoy = Math.floor(Math.random() * altura) - 100

	posicaoy = posicaoy < 0 ? 0 : posicaoy
	posicaox = posicaox < 0  ? 0 : posicaox

	console.log (posicaox, posicaoy)

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaox + 'px'
	mosquito.style.top = posicaoy + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)

 
}



function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

		switch (classe) {
		case 0: 
			return 'mosquito1' 

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

		switch (classe) {
		case 0: 
			return 'ladoA' 

		case 1:
			return 'ladoB'
	}
}
