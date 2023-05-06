import Race from './Race';

class Orc extends Race {
  private static _numberInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._numberInstances += 1;
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    return this._numberInstances;
  }

  get maxLifePoints(): number { 
    return this._maxLifePoints;
  }
}

export default Orc;