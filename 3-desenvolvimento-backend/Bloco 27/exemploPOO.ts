class Tv {
  private _brand: string;
  private _sizeInInch: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo = '';


  constructor(b: string, s: number, r: string, c: string[] ) {
    this._brand = b;
    this._sizeInInch = s;
    this._resolution = r;
    this._connections = c;
  }

  set connectedTo(connectedTo: string) {
    if (this._connections.includes(connectedTo)) {
      this._connectedTo = connectedTo;
      return;
    }
    console.log('Sorry, connection unavailable!')
  }

  turnOn():void {
    return console.log(`Ligando ${this._brand}, ${this._sizeInInch}, ${this._resolution}, ${this._connections} conectada a ${this._connectedTo}`)
  }

  getConnectedTo():string {
    return this._connectedTo
  }
}

const TvSala = new Tv('AOC', 32, '800x600', ['HDMI', 'USB']);


TvSala.connectedTo = 'USB'
TvSala.turnOn();