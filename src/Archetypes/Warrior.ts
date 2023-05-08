import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _numberInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._numberInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._numberInstances;
  }

  get energyType() {
    return this._energyType;
  }
}