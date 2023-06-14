var inicio = document.getElementById('txtinicio')
var fim = document.getElementById('txtfim')
var passos = document.getElementById('txtpassos')
var res = document.getElementById('res')
var c = document.getElementById('contagem')

function contar(){    
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passos.value)
    res.innerHTML = `<p>Contando:</p>`
    if(i == '' || f =='' || p == '' || p <= 0){
        window.alert(`[ERRO] Favor verificar valores!`)
        res.innerHTML = `<p>Preencha os campos a cima!</p>`
    }else if(i < f){
        //Contagem crescente
        for(i; i <= f; i+=p){        
            c.innerHTML += `${i}\uD83D\uDC49`            
        }  
        c.innerHTML += `\uD83C\uDFF4`     
    }else{
        //Contagem regressiva
        for(i; i >= f; i-=p){        
            c.innerHTML += `${i}\uD83D\uDC49`            
        }
        c.innerHTML += `\uD83C\uDFF4`    
    }
    
}

/*for(i; i <= f; i+=p){        
    res.innerHTML = `${i} \uD83D\uDC49`
}
res.innerHTML = `\uD83C\uDFF4`*/