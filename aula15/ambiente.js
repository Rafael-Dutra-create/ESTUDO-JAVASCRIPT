let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)

num.push(7)

console.log(`Nosso vetor é o ${num}`)

console.log(`Nosso vetor tem ${num.length} posições`)

num.sort()
console.log(`Nosso vetor em ordem fica: ${num}`)


for(let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`FORMA SIMPLIFICADA:`)

for ( let poss in num){
    console.log(`A posição ${poss} tem o valor ${num[poss]}`)
}

console.log(`------`)
console.log(`Procurando o valor 7`)
console.log(`O valor procurado está na posição ${num.indexOf(7)}`)
console.log(`Procurando o valor 4`)
console.log(`O valor procurado está na posição ${num.indexOf(4)}`)
console.log(`------`)
console.log(`Procurando com IF:`)
let pox = num.indexOf(8)
if (pox == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor procurado está na posição ${pox}`)
}
