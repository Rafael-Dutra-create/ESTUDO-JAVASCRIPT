console.log('Contando o c usando apenas o while')
var c = 1
while (c <= 6){
    console.log(`Passo ${c}`)
    c++ // c + 1
}

console.log('Contando o r Usando o Do/while')
var r = 1
do{
    console.log(`Passo ${r}`)
    r++ // r + 1
}while(r <= 6)



console.log('Contando o d Usando o for')
for (var d = 1; d <= 6; d++){
    console.log(`Passo ${d}`)
}

console.log(`Fim!`)

/*
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/
var t = 1
for(t = 1; t <= 10; t + 2){
    console.log(`Passo ${t}`)
}