import Race from './Race';

class Elf extends Race {
  private static _numberInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._numberInstances += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return this._numberInstances;
  }

  get maxLifePoints(): number { 
    return this._maxLifePoints;
  }
}

export default Elf;