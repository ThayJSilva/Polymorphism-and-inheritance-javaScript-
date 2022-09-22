export  class Animal{
   
    nome: string;
    idade: number;
    som: string;

    constructor(nome: string, idade: number, som: string){
        this.nome = nome;
        this.idade = idade;
        this.som = som;
    
    }
mostrar(){
    console.log(`Nome:${this.nome}\nNome:${this.idade}\nNome:${this.som}`); 
}

}
