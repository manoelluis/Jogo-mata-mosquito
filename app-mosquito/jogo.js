var altura = 0
var largura = 0

function mudatamanho () {
	altura = window.innerHeight
	largura = window.innerWidth	

	console.log(altura, largura)
}

mudatamanho()

	
function posicaoRandomica () {

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
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
