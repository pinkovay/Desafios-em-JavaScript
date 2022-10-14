

function verificar() {
    var texto = document.querySelector('div.ano')
    var agora = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var txtsexo = document.querySelector('div#txt2')
    res.style.textAlign = 'center'
    if (fano.value.length == 0 || fano.value > agora){
        texto.style.color = 'red'
    } else{
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        texto.style.color = 'black'
        var sex = document.getElementsByName('sexo')
        var idade = agora - Number(fano.value)
        if (sex[0].checked){
            var genero = 'Homem'
            txtsexo.style.color = 'black'
        } else if (sex[1].checked){
            var genero = 'Mulher'
            txtsexo.style.color = 'black'
        } else{
            txtsexo.style.color = 'red'
        }
        if (genero == 'Homem' || genero == 'Mulher'){
            res.innerHTML = `${genero} de ${idade} anos`
            if(idade <= 10) {
                img.setAttribute('src', `${genero}/foto-bebe.png`)
            }else if(idade <= 21) {
                img.setAttribute('src', `${genero}/foto-jovem.png`)
            }else if(idade <= 50){
                img.setAttribute('src', `${genero}/foto-adulto.png`)
            }else {
                img.setAttribute('src', `${genero}/foto-idoso.png`)}

         
            res.innerHTML = `${genero} de ${idade} anos`
            res.appendChild(img)
        } else{
            res.innerHTML = 'Informe todos os dados.'

           
        }

    }

}