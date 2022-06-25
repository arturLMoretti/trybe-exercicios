class Hero {
  _nome: string;
  _poder:string;

  constructor(nome: string, poder: string) {
    this._nome = nome;
    this._poder = poder;
  }

  falarFraseInspiradora(frase: string) {
    return `${this._nome} proclama: ${frase}`
  }
}

const Hero1 = new Hero('Hermanoteu', 'nenhum');

console.log(Hero1.falarFraseInspiradora('banana'))