function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', "imagem/bebe-menino250.png")
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', "imagem/jovem-menino250.png")
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', "imagem/homem250.png")
            }else{
                //idoso
                img.setAttribute('src', "imagem/idoso250.png")
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', "imagem/bebe-menina250.png")
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', "imagem/jovem-menina250.png")
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', "imagem/mulher250.png")
            }else{
                //idoso
                img.setAttribute('src', "imagem/idosa250.png")
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}