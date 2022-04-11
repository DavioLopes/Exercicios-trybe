export default class Person {
  private _name: string = String();
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }
  get name(): string { return this._name; }
  get birthDate(): Date { return this._birthDate; }
  
  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  set birthDate(value: Date) {
    this.validateAge(value);
    this._birthDate = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
    }
  private validateAge(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}

