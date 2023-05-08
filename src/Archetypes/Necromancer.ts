import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _numberInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._numberInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._numberInstances;
  }

  get energyType() {
    return this._energyType;
  }
}