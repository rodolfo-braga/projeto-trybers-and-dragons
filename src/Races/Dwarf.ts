import Race from './Race';

export default class Dwarf extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 80;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf.countCreatedInstances();
  }

  private static countCreatedInstances() {
    this._createdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return this._createdRacesInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}