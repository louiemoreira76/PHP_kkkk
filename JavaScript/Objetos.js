import prompt from 'prompt-sync';
let ler = prompt();
//objeto js
const Carro = {
    marca: 'Toyota',
    modelo: 'Corola',
    ano: 2023,
    automatico: true,
    proprietario:{
        nome: 'Luis',
        idade: 20,
    },
    Km200: function() {
        console.log("Passou dos 200km")
    },
    Gaso(){
        console.log("Está acabando a gasolina!")
    }
}

const Moto = new Object({
    marca: "",
    ano: "",
    pesada: false,
    setMarca(marca){
        this.marca = {marca: ler()}
        return this.marca
    },
    proprietario: {...Carro.proprietario    }
})
//Destruturado
const {nome, cnpj} = {
    nome: 'Fenix',
    cnpj: 45678765432001,
    idade: 50,
}

console.log(nome, cnpj)

Moto['editarAno'] = function(Ano){
    console.log(`Novo ano ${Ano}`)
    this.ano = Ano
}


const forma1 = new Object()//contrutor
const forma2 = {}// literal 

Carro.quatroX = true;
Moto.ligar = () =>{
    console("Ligou On")
}

Moto['editarAno']('2000/2024')
console.log(Carro)
delete Carro.proprietario;

console.log(Carro)

const Carros = [Carro.proprietario];

console.log(Object.keys(Moto))
console.log(Object.values(Moto))

for(const int of Object.entries(Carro)){
    console.log(int)
}

const json = JSON.stringify(Carro);
console.log('Objeto json', json);

const js = JSON.parse(json)
console.log('Objeto JS', js)