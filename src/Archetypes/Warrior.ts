import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior.countCreatedInstances();
  }

  private static countCreatedInstances() {
    this._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances() {
    return this._createdArchetypeInstances;
  }

  get energyType() {
    return this._energyType;
  }
}